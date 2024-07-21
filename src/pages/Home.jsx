import React, { useEffect, useState } from 'react'
import service from '../appwrite/conf'
import { Container, Postcard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className='m-0 w-full py-8 mt-4 text-center'>
        <Container>
          <div className='flex flex-wrap'>
            <div className='p-2 w-full h-40'>
              <h1 className='text-2xl font-bold leading-loose text-blue-200'>
                There are no Blogs to show :|
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className='w-full py-8 m-0'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-3 sm:p-10 w-1/2 sm:w-1/3'>
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home