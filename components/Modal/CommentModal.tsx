import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { commentModalState } from '../../atoms/commentModalState'
import { useRecoilState } from 'recoil'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { postIDAtom } from '../../atoms/postIDAtom'
import firebase from '@firebase/app-compat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { replyingAtom } from '../../atoms/replyingAtom'

function CommentModal() {
    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(commentModalState)
    const [comment, setComment] = useState("");
    const [PostID, setID] = useRecoilState(postIDAtom)
    const [reply, setReply] = useRecoilState(replyingAtom)

    const sendComment = async (e) => {
        e.preventDefault();
        const commenttoSend = comment;
        setComment('')
        await addDoc(collection(db, "posts", PostID, 'comments'), {
            comment: commenttoSend,
            username: user.displayName,
            userImage: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,

        })
        setOpen(false)
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
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                          >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                  <Dialog.Title
                                      as="h3"
                                      className="text-lg font-medium leading-6 text-gray-900"
                                  >
                                      Compose a Reply
                                  </Dialog.Title>
                                  <div className="mt-2 ">
                                   <div className="flex items-center space-x-1">
                                          <h1>Replying to </h1>
                                          <h1 className='text-blue-500'>{reply}</h1>
                                   </div>
                                      <form action="" className="flex items-center p-2 mt-4 bg-gray-100 mb-2 ml-2 mr-2 rounded-xl">
                <FaceSmileIcon className='h-6' />
                <input
                  type="text"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder='Add a comment...'
                  className='border-none flex-1 focus:ring-0 outline-none ml-2 bg-gray-100'
                />
                {/* <button  type="submit" onClick={sendComment} className="font-semibold text-blue-400 ">Post </button> */}
              </form>
                                  </div>

                                  <div className="mt-4">
                                      <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                          onClick={sendComment}
                                          disabled={!comment.trim()}
                                      >
                                          Post Reply
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

export default CommentModal