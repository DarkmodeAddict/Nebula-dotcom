import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, Realtimeeditor } from '..'
import { useSelector } from 'react-redux'
import service from '../../appwrite/conf'
import { useNavigate } from 'react-router-dom'

function Postform({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      Title: post?.Title || '',
      slug: post?.$id || '',
      Content: post?.Content || '',
      Status: post?.Status || 'active'
    }
  })

  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)

  const submit = async (data) => {
    if (post) {
      const file = await data.image[0] ? service.uploadFile(data.image[0]) : null
      if (file) {
        service.deleteFile(post.FeaturedImage)
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        FeaturedImage: file ? file.$id : undefined
      })
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    }
    else {
      const file = await service.uploadFile(data.image[0])
      if (file) {
        const fileId = file.$id
        data.FeaturedImage = fileId
        const dbPost = await service.createPost({
          ...data,
          UserID: userData.$id
        })
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-')

    return ''
  }, [])

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'Title') {
        setValue('slug', slugTransform(value.Title, { shouldValidate: true }))
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])

  return (
    <div className='bg-gray-900 p-10 rounded-2xl'>
      <p className='mb-10 text-red-500 text-xl'> If your Submit option doesn't work, please refresh the page and redirect to Home Page and try again. It is advised to save the writings someplace safe due to loss of content. If it still doesn't work, contact Developer. </p>
      <form onSubmit={handleSubmit(submit)} className='sm:flex sm:flex-wrap'>
        <div className='sm:w-2/3 sm:px-10'>
          <Input
            label='Enter your Blog Title:'
            placeholder='Title'
            className='mb-4'
            {...register('Title', { required: true })}
          />
          <Input
            label='Generared slug:'
            placeholder='Slug'
            className='mb-4'
            {...register('slug', { required: true })}
            onInput={(e) => {
              setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
          />
          <Realtimeeditor label='Content: [ Dont use any colors/styles because those featured are paid (I am broke :) ]' name='Content' control={control} defaultValue={getValues('Content')} />
        </div>
        <div className='mt-5 sm:w-1/3 sm:px-2'>
          <Input
            label='Insert your featured image: [square image preffered]'
            type='file'
            className='mb-4'
            accept='image/png, image/jpg, image/jpeg, image/gif'
            {...register('image', { required: !post })}
          />
          {post && (
            <div className='w-full mb-4'>
              <img
                src={service.getFilePreview(post.FeaturedImage)}
                alt={post.Title}
                className='rounded-lg'
              />
            </div>
          )}
          <Select
            options={['active', 'inactive']}
            label='Select you Blog Status type: '
            className='mb-9 !bg-gray-950 text-white focus:bg-gray-700 border-0'
            {...register('Status', { required: true })}
          />
          <Button type='submit' bgColor={post ? 'bg-violet-800 hover:bg-violet-900' : undefined} className='w-full'>
            {post ? 'Update' : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Postform