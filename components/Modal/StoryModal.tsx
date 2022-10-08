
import React, { Fragment, useRef, useState } from 'react'
import { modalState } from '../../atoms/modalAtom'
import { useRecoilState } from "recoil"
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon, CubeTransparentIcon, PlusIcon } from '@heroicons/react/24/outline'
import { db, storage } from '../../firebase'
import { addDoc, collection, doc, updateDoc } from "@firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import toast from 'react-hot-toast'
import { StoryModalState } from '../../atoms/StoryAtom'

function StoryModal() {

    const [StoryOpen, setStoryOpen] = useRecoilState(StoryModalState)
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const captionRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const uploadPost = async () => {

        if (loading) return;
        const refreshToast = toast.loading("Uploading Story...")
        toast.success('Story Uploaded Successfully! 🎉', {
            id: refreshToast
        })
        db.collection('stories').doc(user.uid).set({
            email: user.email,
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: user.photoURL,
            username: user.displayName,
            about: "Hey There I am using HexaGon",
            phone: user.phoneNumber,
            uid: user.uid,
            slug: user.displayName.replace(/\s+/g, '').toLowerCase(),
            lowerUsername: '@' + user.displayName.replace(/\s+/g, '').toLowerCase()
        },
            { merge: true });
        setLoading(true)



        const docRef = await addDoc(collection(db,"stories", user.uid, "updates"), {
            posttext: captionRef.current.value,
            profileImg: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid
        })

        console.log("New doc added wth ID", docRef.id);
        const imageRef = ref(storage, `stories/${docRef.id}/image`)
        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
                const downloadURL = await getDownloadURL(imageRef)
                await updateDoc(doc(db,"stories",user.uid, "updates",docRef.id), {
                    image: downloadURL
                })
            });
        }

        setStoryOpen(false)
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

  return (
    
          <div>
              <Transition appear show={StoryOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={() => setStoryOpen(false)}>
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
                                          Upload Story..
                                      </Dialog.Title>
                                      {selectedFile ? (
                                          <div className='flex space-x-4 items-center'>
                                              <img src={selectedFile} onClick={() => setSelectedFile(null)}
                                                  className="w-32 object-contain cursor-pointer rounded-lg mt-2"
                                                  alt="" />
                                              <PlusIcon className="w-6 h-6" />
                                          </div>
                                      ) : (
                                          <div onClick={() => filePickerRef.current.click()} className="mt-4 flex items-center justify-center h-10 w-10 rouned-full bg-blue-100 rounded-full cursor-pointer">
                                              <CameraIcon
                                                  className="h-6 w-6  rounded-full"
                                                  aria-hidden="true"
                                              />
                                          </div>
                                      )}
                                  

                                      <div>
                                          <input type="file"
                                              ref={filePickerRef}
                                              hidden
                                          onChange={addImageToPost}
                                          />
                                      </div>

                                      <div className="mt-2">
                                          <textarea ref={captionRef}
                                              className='h-28 rounded-lg outline-none focus:ring-0 w-full p-2'
                                              placeholder="Say Something..." />
                                      </div>

                                      <div className="mt-4">
                                          <button
                                              type="button"
                                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                              onClick={uploadPost}
                                          >
                                              {loading ? "Uploading..." : "Upload Story"}
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

export default StoryModal