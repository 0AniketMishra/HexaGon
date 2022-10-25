import React from 'react'
import MiniProfile from '../Common/MiniProfile'
import Posts from './Posts'
import Sidebar from '../Common/Sidebar'
import Stories from './Stories'
import Suggestions from '../Common/Suggestions'

function Feed() {

  return (
    <main className='grid grid-cols-1  lg:grid-cols-12 lg:max-w-7xl mx-auto'>

      <section className='lg:col-span-3 md:col-span-0 hidden lg:inline-flex'>
        <div className="fixed top-20">
          <Sidebar />
        </div>
      </section>

      <section className="lg:col-span-6 md:col-span-7 lg:ml-4  lg:mr-4 mt-6 rounded-lg">
        <Stories />
        <Posts />
      </section>

      <section className="hidden lg:inline-grid lg:cols-span-3">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
      
    </main>

  )
}

export default Feed