import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRecoilState } from 'recoil'
import { followState } from '../../atoms/followAtom'
import { pidState } from '../../atoms/pidAtom'
import { useEffect } from 'react'
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function FollowModal() {
    const [user] = useAuthState(auth);
    const [followOpen, setFollowOpen] = useRecoilState(followState)
    const [pidValue, setPidValue] = useRecoilState(pidState)
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [selectedTab, setSelectedTab] = useState("Followers")

    useEffect(() => onSnapshot(collection(db, 'users', pidValue, 'following'), (snapshot) =>
        setFollowing(snapshot.docs)), [db]
    )
    useEffect(() => onSnapshot(collection(db, 'users', pidValue, 'followers'), (snapshot) =>
        setFollowers(snapshot.docs)), [db]
    )

    
  
    useEffect(
        () =>
            onSnapshot(query(collection(db, 'users'), where("uid", "==", pidValue)),
                snapshot => {
                    setUserInfo(snapshot.docs)
                }
            ),
        [db]

    );
   
    return (
        <div>
            <Transition appear show={followOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setFollowOpen(false)}>
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
                                      {userInfo.map(info => {
                                        return(
                                            <div className='flex items-center space-x-2' key={info.id}>
                                                <img src={info.data().photoURL} alt="" className='w-10 h-10 rounded-full' />
                                                <div>
                                                    <h1>{info.data().username}</h1>
                                                    <p className='text-sm text-gray-500'>{info.data().lowerUsername}</p>
                                                </div>
                                            </div>
                                        )
                                      })}
                                    </Dialog.Title>
                                   
                                    <ul className="nav nav-tabs flex  border-b-0 pl-0 mt-4 " id="tabs-tab"
                                        role="tablist">
                                        <li className="nav-item cursor-pointer hover:text-blue-600" role="presentation" onClick={() => setSelectedTab("Followers")}>
                                            <h1 className="  nav-link  block  font-bold  text-md  leading-tight  border-x-0 border-t-0 border-b-2 border-transparent  px-6  py-3     focus:border-transparent  active
                                             " id="tabs-home-tab" data-bs-toggle="pill" role="tab"
                                                aria-selected="true">Followers</h1>
                                        </li>
                                        <li className="nav-item cursor-pointer hover:text-blue-600" role="presentation" onClick={() => setSelectedTab("Following")}>
                                            <h1 className="  nav-link  block  font-bold  text-md  leading-tight    border-x-0 border-t-0 border-b-2 border-transparent  px-6  py-3      focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill" role="tab"
                                                aria-selected="false">Following</h1>
                                        </li>
                                    </ul>
                                    {/* <h1 className="mt-2 mb-2 font-bold">{selectedTab} - </h1> */}
                                       {/* {selectedTab != "" &&(
                                        <div className="">

                                            <div className="max-w-xl ">
                                                <div className=" p-3 rounded-md flex h-10   items-center">
                                                    <div className=' hidden lg:inline-flex space-x-2  p-2 rounded-full px-2  justify-center '>
                                                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                                        <input type="text" placeholder='Search' className='bg-transparent lg:w-80  w-36 outline-none  ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       )} */}
                                   
                                      {selectedTab === "Followers" &&(
                                        <div>
                                            {followers.map(follower => {
                                                return (
                                                    <div key={follower.id} className="mt-2 max-h-32 overflow-y-scroll scrollbar-hide">
                                                        <div className='flex space-x-2 items-center  p-2 hover:bg-gray-100 rounded-lg cursor-pointer' >
                                                            <div>
                                                                <img src={follower.data().photoURL} alt="" className='w-8 h-8 rounded-full' />
                                                            </div>
                                                            <div>
                                                                <h1 className='font-semibold'>{follower.data().username}</h1>
                                                                {/* <p className='text-sm'>@{follower.data().username.replace(/\s+/g, '').toLowerCase()}</p> */}
                                                            </div>
                                                            <h1 className="flex-1"></h1>
                                                            <div>
                                                                <EllipsisHorizontalIcon className='w-4 h-4'/>
                                                            </div>
                                                        </div>
                                                   </div>
                                                )
                                            })}
                                        </div>
                                      )}
                                    {selectedTab === "Following" && (
                                        <div>
                                            {following.map(data => {
                                                return (
                                                    <div key={data.id} className="mt-2 max-h-32 overflow-y-scroll scrollbar-hide">
                                                        <div className='flex space-x-2 items-center  p-2 hover:bg-gray-100 rounded-lg cursor-pointer' >
                                                            <div>
                                                                <img src={data.data().photoURL} alt="" className='w-8 h-8 rounded-full' />
                                                            </div>
                                                            <div>
                                                                <h1 className='font-semibold'>{data.data().username}</h1>
                                                                {/* <p className='text-sm'>@{follower.data().username.replace(/\s+/g, '').toLowerCase()}</p> */}
                                                            </div>
                                                            <h1 className="flex-1"></h1>
                                                            <div>
                                                                <EllipsisHorizontalIcon className='w-4 h-4' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setFollowOpen(false)}
                                        >
                                            Close
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

export default FollowModal