import React, { useState, useEffect } from 'react'
import service from '../appwrite/conf'
import { Container, Postcard } from '../components'

function Allposts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])
  service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }
  })

  return (
    <div className='w-full py-8'>
      <Container>
        {posts.map((post) => (
          <div key={post.$id} className='p-2 w-1/4'>
            <Postcard {...post} />
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Allposts