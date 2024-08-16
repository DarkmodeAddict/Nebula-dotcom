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
          <h1 className='text-4xl sm:text-6xl mb-20 text-blue-200 font-serif'> Nebula: Creativity Reimagined </h1>
          <div className='flex flex-col sm:flex-row gap-10 mb-20'>
            <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
              <h3 className='sm:text-5xl text-2xl mb-10 font-serif'> Discover ideas </h3>
              <p className='text-xl mx-5 text-gray-300'>
                Welcome to Nebula.com, a space where you can express your thoughts and creativeness in the form of your writings and statements. Whether you are here to explore perspectives or provide your valuable opinions or simply indulge time in quality reading, we have got you covered.
              </p>
            </div>
            <div className='sm:w-1/3 flex flex-col justify-center'>
              <img src="/home-page-1.png" className='rounded-xl' alt="" />
            </div>          
          </div>
          <div className='flex flex-col sm:flex-row-reverse gap-10 mb-20'>
            <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
              <h3 className='sm:text-5xl text-2xl mb-10 font-serif'> About Nebula </h3>
                <p className='text-xl mx-5 text-gray-300'>
                  Nebula was born for a desire to connect with like-minded individuals across the globe. Our blog covers a diverse range of topics, including:
                  <br /><br />
                  <ul>
                    <li> <b>Technology:</b> Stay ahead with insights on the latest tech innovations and digital trends.
                    </li>
                    <li> <b>Lifestyle:</b> Find inspiration for your everyday life, from wellness tips to travel guides.</li>
                    <li> <b>Science:</b> Dive deep into fascinating discoveries and scientific breakthroughs.</li>
                    <li> <b>Culture:</b> Explore the rich tapestry of global cultures, arts, and history.</li>
                    <li> <b>Personal Development:</b> Empower yourself with advice on <br /> career growth, productivity, and self-improvement.</li>
                  </ul>
                </p>
            </div> 
            <div className='sm:w-1/3 flex flex-col justify-center'>
              <img src="/home-page-2.png" className='rounded-xl' alt="" />
            </div>         
          </div>
          <div className='flex flex-col sm:flex-row gap-10 mb-20'>
            <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
              <h3 className='sm:text-5xl text-2xl mb-10 font-serif'> Our Mission </h3>
                <p className='text-xl mx-5 text-gray-300'>
                  At Nebula, the mission is to inform, inspire, and ignite thoughtful conversations. Believing in the power of words to shape minds and change the world where each article is crafted with care and infused with unique voice.
                </p>
            </div> 
            <div className='sm:w-1/3 flex flex-col justify-center'>
              <img src="/home-page-3.png" className='rounded-xl' alt="" />
            </div>         
          </div>
          <div className='flex flex-col sm:flex-row-reverse gap-10 mb-20'>
            <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
              <h3 className='sm:text-5xl text-2xl mb-10 font-serif'> Want to Get Involved? </h3>
                <p className='text-xl mx-5 text-gray-300'>
                  We love hearing from our readers! If you have ideas, suggestions, or just want to say hello, feel free to contact us. Interested in writing for Nebula? <br /> Just Sign Up and start writing your thoughts.
                </p>
            </div> 
            <div className='sm:w-1/3 flex flex-col justify-center'>
              <img src="/home-page-4.png" className='rounded-xl' alt="" />
            </div>         
          </div>
          <p className='text-xl mt-30'>Thank you for visiting Nebula. We hope you enjoy your time here and find content that resonates with you. Happy reading!</p>
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