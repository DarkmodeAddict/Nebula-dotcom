import React, { useState, useEffect } from 'react'
import service from '../appwrite/conf'
import { Container, Postcard } from '../components'

function Allposts() {
  const [posts, setPosts] = useState([])
  useEffect(() => { }, [])
  service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  })

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 sm:p-4 w-1/3 sm:w-1/6'>
              <Postcard className='text-sm' {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Allposts