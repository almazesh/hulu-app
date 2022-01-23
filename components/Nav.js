import { useRouter } from 'next/router';
import React from 'react';
import requests from '../utils/requests'


export default function Nav() {
  const router = useRouter()
  return (
      <nav className='nav'>
          <div>
              {
                  Object.entries(requests).map(([key, {title , url}]) =>(
                      <h2 key={key} className="" onClick={() => router.push(`/?genre=${key}`)}>{title}</h2>
                  ))
              }
          </div>
      </nav>
  )
}
