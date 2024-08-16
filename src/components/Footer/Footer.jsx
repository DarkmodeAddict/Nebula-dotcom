import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-950 border border-t-2 border-gray-950 border-t-gray-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-400">
                  &copy; Copyright 2024. All Rights Reserved by Anurag B.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-bold uppercase text-gray-200">
                Project
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-100 hover:text-gray-100"
                    to="/"
                  >
                    Source
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-100 hover:text-gray-100"
                    to="/"
                  >
                    Developer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-bold uppercase text-gray-200">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-100 hover:text-gray-100"
                    to="/"
                  >
                    Instructions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-100 hover:text-gray-100"
                    to="/"
                  >
                    Bugs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-100 hover:text-gray-100"
                    to="/"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-bold uppercase text-gray-200">
                Socials
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-400 hover:text-gray-700"
                    to="/"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-blue-400 hover:text-blue-700"
                    to="/"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-purple-400 hover:text-purple-700"
                    to="/"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer