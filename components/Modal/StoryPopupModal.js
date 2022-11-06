import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { StoryModalAtomState } from '../../atoms/StoryModalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SelectedStoryAtom } from '../../atoms/SelectedStoryAtom'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Stories from 'react-insta-stories';
import { Navigation, autoplay, Autoplay, onReachEnd } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { postPidState } from '../../atoms/postPidAtom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function StoryPopupModal() {
    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(StoryModalAtomState)
    const [selectedStory, setSelectedStory] = useRecoilState(SelectedStoryAtom)
    const [data, setData] = useState([])
    const [storyID, setStoryID] = useState([])
    const [storyImage ,setStoryImage] = useState([])
    const [info, setInfo] = useState([])

   
   
 
            onSnapshot(query(collection(db, 'stories'), where("slug", "==", selectedStory)),
                snapshot => {
                    setInfo(snapshot.docs)
                }
            ),
       

 onSnapshot(query(collection(db, 'stories', selectedStory, 'updates')), (snapshot) =>
        setData(snapshot.docs)), [db, selectedStory]
    

    


  return (
    <div>
        
         

          <Transition appear show={Open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center mt-12 justify-center p-4 text-center">
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                          >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                  {info.map(info => {
                                    return(
                                       <div key={info.id}>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                <div className='flex items-center space-x-2 p-2'>
                                                    <ArrowLeftIcon className='w-6 h-6 cursor-pointer' onClick={() => setOpen(false)}/>
                                                    <img src={info.data().photoURL} className="w-10 h-10 p-[2px] border rounded-full" />
                                                    <div className='text-sm'>
                                                        <h1 className='font-bold'>  {info.data().username}</h1>
                                                        <p>{info.data().lowerUsername}</p>
                                                    </div>
                                                </div>
                                            </Dialog.Title>
                                       </div>
                                    )
                                  })}
                                  <div className="mt-2">
                                      <div className="">

                                          <Swiper
                                              navigation={false}
                                              modules={[Navigation, Autoplay]}
                                             
                                              className="mySwiper"
                                              autoplay={{
                                                  delay: 2500,
                                                  disableOnInteraction: false,
                                              }}
                                          >

                                              {data.map(update => {
                                                  return (
                                                      <div key={update.id}>
                                                          {update.data().image && (
                                                          <SwiperSlide>
                                                             
                                                                  <img
                                                                      className="object-fill w-fit  "
                                                                      src={update.data().image}
                                                                      alt="image slide 1"
                                                                  />
                                                              
                                                          </SwiperSlide>
                                                          )}
                                                          {update.data().posttext &&(
                                                             <div className=''>
                                                                  <SwiperSlide>
                                                                      {update.data().posttext && (
                                                                          <h1 className='ml-8 mr-8 h-96 text-lg font-semibold'>{update.data().posttext}</h1>
                                                                      )}
                                                                  </SwiperSlide>
                                                             </div>
                                                          )}
                                                      </div>
                                                  )
                                              })}




                                          </Swiper>


                                      </div>
                                  </div>

                                 
                              </Dialog.Panel>
                          </Transition.Child>
                      </div>
                  </div>
              </Dialog>
          </Transition>
    </div>
  )
}

export default StoryPopupModal