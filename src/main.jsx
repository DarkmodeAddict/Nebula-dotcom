import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Authlayout, Login } from './components/index.js'

import Home from './pages/Home.jsx'
import Addpost from './pages/Addpost.jsx';
import Signup from './pages/Signup.jsx'
import Editpost from './pages/Editpost.jsx';
import Post from './pages/Post.jsx';
import Allposts from './pages/Allposts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        )
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <Authlayout authentication>
            {" "}
            <Allposts />
          </Authlayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            {" "}
            <Addpost />
          </Authlayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Authlayout authentication>
            {" "}
            <Editpost />
          </Authlayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
