import React from 'react'
import Header from '../components/Common/Header'
import Feed from '../components/Feed/Feed'
import Modal from '../components/Modal/Modal'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import StoryModal from '../components/Modal/StoryModal'
import StoryPopupModal from '../components/Modal/StoryPopupModal'
import CustomizeModal from '../components/Modal/CustomizeModal'
import FollowModal from '../components/Modal/FollowModal'


function Home() {
 
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide bg-gray-100">
      <Head>
        <title>Home | HexaGon</title>
      </Head>
        <Header />
      <StoryModal />
      <CustomizeModal/>

      <StoryPopupModal/>
        <Modal />
       
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Feed />
    </div>
  )
}

export default Home