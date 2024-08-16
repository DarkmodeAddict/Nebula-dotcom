import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/conf'
import { Button, Container } from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData)

  const isAuthor = post && userData ? post.UserID === userData.$id : false

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post)
        else navigate('/')
      });
    } else navigate('/')
  }, [slug, navigate])

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.FeaturedImage)
        navigate('/')
      }
    });
  };

  return post ? (
    <div className='py-8'>
      <Container>
        <div className='w-full flex justify-center mb-4 relative rounded-xl p-2'>
          <img
            src={service.getFilePreview(post.FeaturedImage)}
            alt={post.Title}
            className='rounded-xl'
          />

          {isAuthor && (
            <div className='absolute right-6 top-6'>
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor='bg-green-600 hover:bg-green-800' className='mr-3'>
                  Edit
                </Button>
              </Link>
              <Button bgColor='bg-red-600 hover:bg-red-800' onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className='w-full mb-6'>
          <h1 className='my-8 text-2xl font-serif sm:text-6xl text-center font-bold'>{post.Title}</h1>
        </div>
        <div className='text-center text-lg sm:text-xl browser-css font-serif'>
          {parse(post.Content)}
        </div>
      </Container>
    </div>
  ) : null
}