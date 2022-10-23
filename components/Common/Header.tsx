import React, { Fragment } from 'react'
import { ArrowPathIcon, ArrowPathRoundedSquareIcon, Bars4Icon, BellIcon, CogIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon, SparklesIcon, UserGroupIcon,} from '@heroicons/react/24/outline'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { modalState } from '../../atoms/modalAtom';
import { useRecoilState } from 'recoil';
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react';
import { StoryModalState } from '../../atoms/StoryAtom';

function Header() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(modalState)
    const [StoryOpen, setStoryOpen] = useRecoilState(StoryModalState)

    return (
    <div className=" sticky top-0 bg-white z-40">
        <div className="flex justify-between max-w-7xl  mx-5 lg:mx-auto ">
            <div className='relative h-12 w-24 cursor-pointer'>
                <div className="flex items-center lg:ml-6">
                        <img onClick={() => auth.signOut()} src="https://actufinance.fr/wp-content/uploads/2021/02/Paymium-logo-300x300.jpg" alt="" className=" ml-2 w-14 h-14 rounded-full " />
                         <h1 className='font-bold text-md'>HexaGon</h1>
                    </div>
                </div>

                <div className="max-w-xl ">
                    <div className=" p-3 rounded-md flex h-14 items-center">
                        <div className=' hidden lg:inline-flex space-x-2 bg-gray-100 p-2 rounded-full px-2  justify-center '>
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                            <input type="text" placeholder='Search-HexaGon' className='bg-transparent lg:w-80  w-36 outline-none  ' />
                        </div>
                    </div>
                </div>
                <div className="flex  items-center space-x-2 lg:mr-6"> 
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex  mt-1 mr-1    ">
                                {/* Options
                // <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                                <PlusIcon  className='  w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                            </Menu.Button>
                        </div>
                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                                )}>

                                                <div>
                                                    <p onClick={() => setOpen(true)}>Upload Post</p>
                                                </div>
                                            </a>
                                        )}
                                    </Menu.Item>
                                    {/* <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                                )}>
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item> */}
                                    {/* <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                                )}>
                                                License
                                            </a>
                                        )}
                                    </Menu.Item> */}
                                    
                                
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    onClick={() => setStoryOpen(true)}
                                                        type="submit"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm'
                                                        )}>
                                                     Upload Story
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        
                                    
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link href="/" >
                        <a className="flex items-center">
                            <HomeIcon className='  w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                        </a>
                    </Link>
                    <Link href="/chats" >
                        <a className="flex items-center    hover:scale-125 transition-all duration-150 ease-out max-w-fit p-2  group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                            <UserGroupIcon className=" w-6 h-6 " />
                        </a>
                    </Link>
                    
                    <Link href="/" >
                        <a className="flex items-center">
                            <SparklesIcon className='  w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                        </a>
                    </Link>
                    <Link href="/" >
                        <a className="flex items-center">
                            <CogIcon className='  w-6 h-6 hover:scale-125 transition-all duration-150 ease-out' />
                        </a>
                    </Link>
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Header