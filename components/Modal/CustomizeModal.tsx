import React from 'react'
import { useRecoilState } from 'recoil'
import { CustomizeState } from '../../atoms/CustomizeAtom'
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { db, storage } from '../../firebase'
import { addDoc, collection, doc, updateDoc } from "@firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import toast from 'react-hot-toast'
import { pidState } from '../../atoms/pidAtom'
import { onSnapshot, query, where } from 'firebase/firestore'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { pid } from 'process'

function CustomizeModal() {
    const [Open, setOpen] = useRecoilState(CustomizeState)
    const filePickerRef = useRef(null);
    const vidPickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const captionRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const [pidValue, setPidValue] = useRecoilState(pidState)
    const [userInfo, setUserInfo] = useState([])
      const [username, setUsername] = useState("");
      const [about, setAbout] = useState("");


    const saveChanges = async () => {

        if (loading) return;
        const refreshToast = toast.loading("Updating Profile...")
        toast.success('Profile Updated Successfully! 🎉', {
            id: refreshToast
        })

        setLoading(true)
        const docRef = await updateDoc(doc(db, "users", pidValue), {
            username: username,
            about: about
        })

        

        const imageRef = ref(storage, `users/${pidValue}/image`)
        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
                const downloadURL = await getDownloadURL(imageRef)
                await updateDoc(doc(db, 'users', pidValue), {
                    photoURL: downloadURL
                })
            });
        }
        
         setOpen(false)
        setLoading(false)
        setSelectedFile(null)
    }


 
    useEffect(
        () =>
            onSnapshot(query(collection(db, 'users'), where("uid", "==", user.uid)),
                snapshot => {
                    setUserInfo(snapshot.docs)
                }
            ),
        [db]
        
    );
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
  

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
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                      Customize Your Profile..
                                  </Dialog.Title>
                                  <div className='flex space-x-4'>
                                      {/* {selectedFile ? (
                                          <div className='flex space-x-4 items-center'>
                                              <img src={selectedFile} onClick={() => setSelectedFile(null)}
                                                  className="w-32 object-contain cursor-pointer rounded-lg mt-2"
                                                  alt="" />

                                          </div>
                                      ) : (
                                          <div onClick={() => filePickerRef.current.click()} className="mt-4 flex items-center justify-center h-10 w-10 rouned-full bg-blue-100 rounded-full cursor-pointer">
                                              <PhotoIcon
                                                  className="h-6 w-6  rounded-full"
                                                  aria-hidden="true"
                                              />
                                          </div>
                                      )}
                                      {selectedVideo ? (
                                          <div className='flex space-x-4 items-center' onClick={() => setSelectedVideo(null)}>
                                              <video src={selectedVideo} controls autoPlay muted
                                                  className="w-64 object-contain cursor-pointer rounded-lg mt-2"
                                              />

                                          </div>
                                      ) : (
                                          <div onClick={() => vidPickerRef.current.click()} className="mt-4 flex items-center justify-center h-10 w-10 rouned-full bg-blue-100 rounded-full cursor-pointer">
                                              <VideoCameraIcon
                                                  className="h-6 w-6  rounded-full"
                                                  aria-hidden="true"
                                              />
                                          </div>
                                      )} */}

                                      {userInfo.map(info => {
                                        return(
                                            <div className='mt-4  items-center space-x-2'>
                                           

                                                {selectedFile ? (
                                                    <div onClick={() => setSelectedFile(null)} className="mt-4 w-20  rouned-full  rounded-full cursor-pointer">
                                                        <div>
                                                            <img src={selectedFile} alt="" className='rounded-full p-1 w-20 h-20 border' />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div onClick={() => filePickerRef.current.click()} className="mt-4 w-20  rouned-full  rounded-full cursor-pointer">
                                                            <div>
                                                                <img src={info.data().photoURL} alt="" className='rounded-full p-1 w-20 h-20 border' />
                                                            </div>
                                                    </div>
                                                )}


                                            <div>
                                             <div className="flex space-x-4">
                                                        <h1 className='text-lg font-bold'>Username: </h1>
                                                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Enter your username' className='outline-none '/>
                                             </div>
                                                    {/* <p>@{info.data().username.replace(/\s+/g, "").toLowerCase()}</p> */}
                                             <div className='flex space-x-4 mt-2'>
                                                        <h1 className='text-lg font-bold'>About:</h1>
                                                        <input value={about} onChange={e => setAbout(e.target.value)} type="text" placeholder='Enter your about' className='w-full outline-none'/>
                                             </div>

                                            </div>
                                            </div>
                                        )
                                      })}
                                  </div>

                                  <div>
                                      <input type="file"
                                          ref={filePickerRef}
                                          hidden
                                          onChange={addImageToPost}
                                      />
                                  </div>
                                 
                                  {/* <div className="mt-2">
                                        <textarea ref={captionRef}
                                            className='h-28 rounded-lg outline-none focus:ring-0 w-full p-2'
                                            placeholder="Say Something..." />
                                    </div> */}

                                  <div className="mt-4">
                                      <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                         onClick={saveChanges}
                                      >
                                          {loading ? "Saving Changes..." : "Save Changes"}
                                    </button>
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

export default CustomizeModal