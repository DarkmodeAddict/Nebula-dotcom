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
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2'>
        <Input
          label='Title :'
          placeholder='Title'
          className='mb-4'
          {...register('Title', { required: true })}
        />
        <Input
          label='Slug :'
          placeholder='Slug'
          className='mb-4'
          {...register('slug', { required: true })}
          onInput={(e) => {
            setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <Realtimeeditor label='Content :' name='Content' control={control} defaultValue={getValues('Content')} />
      </div>
      <div className='w-1/3 px-2'>
        <Input
          label='Featured Image :'
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
          label='Status'
          className='mb-4'
          {...register('Status', { required: true })}
        />
        <Button type='submit' bgColor={post ? 'bg-green-500' : undefined} className='w-full'>
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  )
}

export default Postform