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

function StoryPopupModal({id}) {
    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(StoryModalAtomState)
    const [selectedStory, setSelectedStory] = useRecoilState(SelectedStoryAtom)
    const [data, setData] = useState([])
    const [storyID, setStoryID] = useState([])
    const [storyImage ,setStoryImage] = useState([])

   


    useEffect(() => onSnapshot(query(collection(db, 'stories', id, 'updates')), (snapshot) =>
        setData(snapshot.docs)), [db, id]
    )

    
 const stories = [
  {
    url:  "https://firebasestorage.googleapis.com/v0/b/pentagon-89b4a.appspot.com/o/posts%2FfdHvrocpeXg6z5gdPmaP%2Fimage?alt=media&token=82355200-cfd7-41a3-b8c6-8195d5c81e12", 
    duration:3000 
},
 {
   url:  'https://th.bing.com/th/id/OIP.MBLGS3hfrLkuT5PoZ62msgHaEK?pid=ImgDet&rs=1',
   duration:3000
 }
    ]

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
                      <div className="flex min-h-full items-center pt-20 justify-center  text-center">
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                          >
                              <Dialog.Panel className=" max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-end shadow-xl transition-all">
                                  {/* <Dialog.Title
                                      as="h3"
                                      className="text-lg font-medium leading-6 text-gray-900"
                                  >
                                      {selectedStory}
                                  </Dialog.Title> */}
                                  <div className=" ">
                                      <Stories
                                          stories={stories}
                                          defaultInterval={6000}
                                          width={300}
                                          height={500}
                                          loop={true}
                                      />
                                      </div>
                                 

                                  <div className="">
                                      {/* <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100  text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                          onClick={() => setOpen(false)}
                                      >
                                          Close
                                      </button> */}
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