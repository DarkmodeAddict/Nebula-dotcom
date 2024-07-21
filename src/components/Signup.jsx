import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const signup = async (data) => {
    setError('')
    try {
      const userData = await authService.createAccount(data)
      if (userData) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login(userData))
        }
        navigate('/')
      }
    }
    catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className={`mx-auto w-full max-w-lg bg-gray-900 rounded-xl p-10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-xl font-bold leading-tight"> Sign up to create your account </h2>
        <p className="mt-2 px-5 text-center text-base text-white/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Log In
          </Link>
        </p>
        {error && <p className='text-red-600 text-sm mt-2 text-center'> {error} </p>}
        <form className='mt-5' onSubmit={handleSubmit(signup)}>
          <div className='space-y-5'>
            <Input
              label='Enter your full name: '
              placeholder='John Doe'
              {...register('name', {
                required: true
              })}
            />
            <Input
              label='Enter your email address: '
              placeholder='johndoe5@gmail.com'
              type='email'
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address'
                }
              })}
            />
            <Input
              label='Set your password code: '
              placeholder='********'
              type='password'
              {...register('password', {
                required: true
              })}
            />
            <Button type='submit' className='w-full'> Sign Up </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup