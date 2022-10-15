import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { ShareAtomState } from '../../atoms/ShareAtom'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { postPidState } from '../../atoms/postPidAtom'

function ShareModal() {
    const [shareOpen, setShareOpen] = useRecoilState(ShareAtomState)
    const [postPidValue, setPostPidValue] = useRecoilState(postPidState)
    const [link, setLink] = useState("https://hexa-gon.vercel.app/"+postPidValue)
  return (
    <div>
          
          <Transition appear show={shareOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={() => setShareOpen(false)}>
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
                                      Share Post..
                                  </Dialog.Title>
                                  <div className="mt-2">
                                     <div>
                                       <h1 className='font-bold'>Copy the link to share the post - </h1>
                                     </div>
                                     <div className="flex border w-fit rounded-lg mt-2 mb-2 items-center">
                                        <div className=' '>
                                              <h1 className='pl-2 pr-2 truncate w-64'>{link}</h1>
                                        </div>
                                        <div>
                                              <button onClick={() => { navigator.clipboard.writeText(link) }} className='bg-blue-900 h-8 text-white font-bold rounded-lg p-1 '>Copy</button>
                                        </div>
                                     </div>
                                  </div>

                                  <div className="mt-4">
                                      <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                          onClick={() => setShareOpen(false)}
                                      >
                                          Got it, thanks!
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

export default ShareModal