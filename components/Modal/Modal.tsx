import React, { Fragment, useRef, useState } from 'react'
import { modalState } from '../../atoms/modalAtom'
import { useRecoilState } from "recoil"
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon, CubeTransparentIcon, PhotoIcon, PlusIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import {db, storage} from '../../firebase'
import {addDoc, collection, doc, updateDoc} from "@firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import {ref, getDownloadURL, uploadString} from '@firebase/storage'
import toast from 'react-hot-toast'

function Modal() {

    const [Open, setOpen] = useRecoilState(modalState)
    const filePickerRef = useRef(null);
    const vidPickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const captionRef = useRef(null)
    const [loading, setLoading] = useState(false); 
    const [user] = useAuthState(auth);


    const uploadPost = async () => {
       
      if(loading) return;
        const refreshToast = toast.loading("Uploading Post...")
        toast.success('Post Uploaded Successfully! 🎉', {
            id: refreshToast
        })

      setLoading(true)
      const docRef = await addDoc(collection(db, "posts"), {
        username: user.displayName, 
        posttext: captionRef.current.value, 
        profileImg: user.photoURL, 
          timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
          uid: user.uid
      })
       
      console.log("New doc added wth ID", docRef.id); 
      const imageRef = ref(storage, `posts/${docRef.id}/image`)
        const videoRef = ref(storage, `posts/${docRef.id}/video`)
      if(selectedFile){
          await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
              const downloadURL = await getDownloadURL(imageRef)
              await updateDoc(doc(db, 'posts', docRef.id), {
                  image: downloadURL
              })
          }); 
      }
        if (selectedVideo) {
            await uploadString(videoRef, selectedVideo, "data_url").then(async snapshot => {
                const downloadURL = await getDownloadURL(videoRef)
                await updateDoc(doc(db, 'posts', docRef.id), {
                    video: downloadURL
                })
            });
        }
        
      setOpen(false)
      setLoading(false)
      setSelectedFile(null)
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    const addVideoToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedVideo(readerEvent.target.result)
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
                                        Upload a Post..
                                    </Dialog.Title>
                                    <div className='flex space-x-4'>
                                        {selectedFile ? (
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
                                        )}
                                    </div>

                                    <div>
                                        <input type="file"
                                            ref={filePickerRef}
                                            hidden
                                            onChange={addImageToPost}
                                        />
                                    </div>
                                    <div>
                                        <input type="file"
                                            ref={vidPickerRef}
                                            hidden
                                            onChange={addVideoToPost}
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <textarea ref={captionRef}
                                    className='h-28 rounded-lg outline-none focus:ring-0 w-full p-2'
                                    placeholder="Say Something..."/>
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
                                            onClick={uploadPost}
                                        >
                                            {loading ? "Uploading..." : "Upload Post"}
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
export default Modal

