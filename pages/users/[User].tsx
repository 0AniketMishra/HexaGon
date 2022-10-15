import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import {doc, getDoc, onSnapshot, collection, deleteDoc, setDoc, query, where, getDocs} from "firebase/firestore";
import {db}  from '../../firebase'
import Header from '../../components/Common/Header';
import MiniProfile from '../../components/Common/MiniProfile';
import Suggestions from '../../components/Common/Suggestions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { BellIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EyeIcon, PencilIcon, PencilSquareIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Moment from 'react-moment';
import { Tab } from '@headlessui/react';
import Sidebar from '../../components/Common/Sidebar';
import { useRecoilState } from 'recoil';
import { followState } from '../../atoms/followAtom';
import FollowModal from '../../components/Modal/FollowModal';
import { pidState } from '../../atoms/pidAtom';
import {CustomizeState} from '../../atoms/CustomizeAtom'
import CustomizeModal from '../../components/Modal/CustomizeModal';
import  Link  from 'next/link';
import { userInfo } from 'os';
import { ChatAtomState } from '../../atoms/ChatAtom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import toast from 'react-hot-toast';


const User = ({
    id,
}) => {
    const [selectedChat, setSelectedChat] = useRecoilState(ChatAtomState)
    const router = useRouter()
    const pid  = router.query.User as string
    const [username, setUsername] = useState("")
    const [uid, setUid] = useState("")
    const [photoURL, setPhotoURL] = useState("")
    const [timestamp, setTimestamp] = useState("")
    const [about, setAbout] = useState("")
    const [followers, setFollowers] = useState([])
    const [hasFollowed, setHasFollowed] = useState(false)
    const [following, setFollowing] = useState([])
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([])
    const [followOpen, setFollowOpen] = useRecoilState(followState)
    const [pidValue, setPidValue] = useRecoilState(pidState)
    const [userPosts, setUserPosts] = useState([])
    const [selectedTab, setSelectedTab] = useState("")
    const [userLikes, setUserLikes] = useState([])

      useEffect(() => {
          ;(async () => {
            const docRef = doc(db, 'users', pid); 
            const snapshots = await getDoc(docRef)
            const username = snapshots.data().username
            const photoURL = snapshots.data().photoURL
            const uid = snapshots.data().uid
              const timestamp = snapshots.data().lastSeen
              const about = snapshots.data().about
            setUid(uid)
            setUsername(username)
            setPhotoURL(photoURL)
            setTimestamp(timestamp)
            setAbout(about)

          })()
      }, [])
    setPidValue(pid)
    
    useEffect(() => onSnapshot(collection(db, 'users', pid, 'followers'), (snapshot) =>
        setFollowers(snapshot.docs)), [db]
    )
    useEffect(() => {
        setHasFollowed(followers.findIndex(follower => follower.id === user.uid) !== -1)
    }, [followers])
    useEffect(() => onSnapshot(collection(db, 'users', pid, 'following'), (snapshot) =>
        setFollowing(snapshot.docs)), [db]
    )
    const followUser = async () => {
      
        if (hasFollowed && pid!=user.uid) {
            await deleteDoc(doc(db, 'users', pid ,  'followers', user.uid));
            await deleteDoc(doc(db, 'users', user.uid, 'following', pid))
            setHasFollowed(false)
        } else {

            await setDoc(doc(db, 'users', pid , 'followers', user.uid), {
                username: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid
            });
            await setDoc(doc(db, 'users', user.uid, 'following', pid), {
                username: username,
                photoURL: photoURL,
                uid: uid
            });
           
        }
        
    };
   
//   const ContactUser = async () => {
//     console.log("I am working!!")
//       await setDoc(doc(db, 'users', user.uid, 'Contacts', username), {
//           username: username,
//           profileImg: photoUrl,
     
//           uid: pid
//       }, { merge: true });
//   }

const ContactUser = async () => {
    await setDoc(doc(db, 'userChat', user.uid,"Contacts", uid ), {
        username: username,
        uid: uid, 
        photoURL: photoURL,
    }, {merge: true});
   

}
    const deletePost = async (e) => {
        e.preventDefault();
        if (uid == user.uid) {
            const refreshToast = toast.loading("Deleting Post...")
            await deleteDoc(doc(db, 'posts', id,));
            toast.success('Post Deleted Successfully', {
                id: refreshToast
            })
        }

    }

    useEffect(
        () =>
            onSnapshot(query(collection(db, 'users',), where("uid", "==", pid)),
                snapshot => {
                    setUserInfo(snapshot.docs)
                }
            ),
        [db]
    );
    useEffect(
        () =>
            onSnapshot(query(collection(db, 'posts',), where("uid", "==", pid)),
                snapshot => {
                    setUserPosts(snapshot.docs)
                }
            ),
        [db]
    );
    // useEffect(
    //     () =>
    //         onSnapshot(query(collection(db, 'posts',id, "likes",pid)),
    //             snapshot => {
    //                 setUserLikes(snapshot.docs)
    //             }
    //         ),
    //     [db]
    // );
    const [Open, setOpen] = useRecoilState(CustomizeState)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return( 
        <div className='bg-gray-100 h-screen overflow-y-scroll scrollbar-hide '>
            <Header />
            <FollowModal />
            <CustomizeModal />
            {userInfo.map(info => {
                return (
                    <main className='grid grid-cols-1  lg:grid-cols-12 lg:max-w-7xl mx-auto' key={info.id}>
                        <section className='lg:col-span-3 md:col-span-0 hidden lg:inline-flex'>
                            <div className="fixed top-20">
                                <Sidebar />
                            </div>
                        </section>
                        <section className="lg:col-span-6 md:col-span-6 w-[90%] mx-auto ">
                            <div className='rounded-xl'>
                                <div className="   mt-6   flex   justify-center  ">
                                    <div className=" w-full rounded-xl  bg-white ">


                                        <div className=" h-48 overflow-hidden" >
                                            <img className="w-full rounded-xl " src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                                        </div>

                                        <div className="flex justify-between px-5  -mt-12">
                                            <img className="h-28 w-28 bg-white p-1 rounded-full  ml-4 " src={info.data().photoURL} alt="" />
                                            {pid != user.uid && (
                                                <div className='flex space-x-4 '>
                                                    {/* <EllipsisHorizontalCircleIcon className="w-8  mt-8 h-8 bg-white rounded-full"/> */}
                                                    <Link href='/chats'>
                                                        <a>
                                                            <UserPlusIcon onClick={ContactUser} className=' border-blue-500 border bg-blue-500 text-white w-10 h-10  mt-7 cursor-pointer  rounded-full p-2  ' />
                                                        </a>
                                                    </Link>
                                                    <div className='flex' >
                                                        {hasFollowed ? (
                                                            <button onClick={followUser} className='hover:bg-white border-blue-500 border bg-blue-500 text-white w-24 h-10  mt-7 hover:text-blue-500  rounded-full p-1 hover:border-blue-500 font-bold '>Following</button>

                                                        ) : (
                                                            <button onClick={followUser} className='hover:bg-white border-blue-500 border bg-blue-500 text-white w-24 h-10  mt-7 hover:text-blue-500  rounded-full p-1 hover:border-blue-500 font-bold '>Follow</button>

                                                        )}

                                                    </div>



                                                </div>
                                            )}
                                        </div>


                                        <div className="">
                                            {/* If you want the text to be centered then add text-center in the div below */}

                                            <div className=" px-14">
                                                <div>
                                                    <div className='flex items-center'>
                                                        <h2 className="text-gray-800 text-xl font-bold">{info.data().username}</h2>

                                                        {followers.length > 10 && (
                                                            <img src="https://th.bing.com/th/id/R.9c88df48e24182943ba4945b92aa3704?rik=ng8QDZfIeaOAvg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgTeEegLRc.png&ehk=rFKFF6hVaGBnpA8yieOD6YZvrGTf6%2fiafNKrPlbD7a8%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-5 h-5 mt-1 ml-1' />
                                                        )}
                                                        {uid === user.uid && (
                                                            <PencilSquareIcon className="w-4 ml-1 cursor-pointer " onClick={() => setOpen(true)} />
                                                        )}
                                                    </div>
                                                    <a className="text-gray-400  hover:text-blue-500" target="BLANK()">{info.data().lowerUsername}</a>
                                                </div>


                                                <div className="flex items-center space-x-2 mt-4">
                                                    <h1 className='font-bold'>About: </h1>
                                                    <p>{info.data().about}</p>
                                                </div>

                                                <div className="flex mt-2 items-center space-x-2">
                                                    <h1 className='font-bold'>Last Seen: </h1>
                                                    <h1 className=""> <Moment className="text-sm mr-6" fromNow>{info.data().lastSeen?.toDate()}</Moment></h1>
                                                </div>

                                                <div onClick={() => setFollowOpen(true)} className="flex  space-x-10 mt-4 mb-4 font-bold cursor-pointer rounded-lg hover:bg-gray-100 w-fit p-2 ">
                                                    <h1>{followers.length} Followers</h1>
                                                    <h1>{following.length} Following</h1>
                                                </div>
                                                {/* <h1 className='font-bold'>Posts by {info.data().username} - </h1> */}
                                            </div>



                                            <div className="  flex mt-6 ml-4 mr-4 mb-4">
                                                {selectedTab === "posts" ? (
                                                    <div className='w-1/2'>
                                                        <h1 onClick={() => setSelectedTab('posts')} className=' text-center border-b pb-2 pt-2 border bg-gray-100  cursor-pointer'>Posts by {info.data().username}</h1>
                                                    </div>
                                                ) : (
                                                    <div className='w-1/2'>
                                                        <h1 onClick={() => setSelectedTab('posts')} className='text-center border-b pb-2 pt-2 border hover:bg-gray-100  cursor-pointer'>Posts by {info.data().username}</h1>
                                                    </div>
                                                )
                                                }
                                                {selectedTab === "likes" ? (
                                                    <div className='w-1/2'>
                                                        <h1 onClick={() => setSelectedTab("likes")} className=' text-center border-b pb-2 pt-2 border bg-gray-100  cursor-pointer'>Likes by {info.data().username}</h1>
                                                    </div>
                                                ) : (
                                                    <div className='w-1/2'>
                                                        <h1 onClick={() => setSelectedTab("likes")} className=' text-center border-b pb-2 pt-2 border hover:bg-gray-100  cursor-pointer'>Likes by {info.data().username}</h1>
                                                    </div>

                                                )}
                                            </div>
                                            {selectedTab === "posts" && (
                                                <div className=''>
                                                    {userPosts.map(post => {
                                                        return (
                                                            <div className='mt-4 ml-4 mr-4 mb-4  p-1 rounded-lg ' key={post.id}>
                                                                <div className='flex space-x-2 items-center'>
                                                                    <div><img src={post.data().profileImg} alt="" className='w-10 h-10  p-1 rounded-full' /></div>
                                                                    <div>
                                                                        <h1 className='font-bold'>{post.data().username}</h1>
                                                                        <div className='flex space-x-2'>
                                                                            <p className='text-sm'>{post.data().lowerUsername + " " + "|"}</p>
                                                                            <p className="text-sm">  <Moment fromNow ago>{post.data().timestamp?.toDate()}</Moment></p>
                                                                        </div>
                                                                    </div>
                                                                    <h1 className='flex-1'></h1>
                                                                    <div className=''>
                                                                        <Menu as="div" className="relative inline-block text-left">
                                                                            <div>
                                                                                <Menu.Button className="inline-flex  outline-none  px-4 py-2 text-sm font-medium   ">
                                                                                    {/* Options
                // <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                                                                                    <EllipsisHorizontalIcon className="h-6   hover:scale-125   transition-all duration-150 ease-out" />
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
                                                                                                    Account settings
                                                                                                </a>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                        <Menu.Item>
                                                                                            {({ active }) => (
                                                                                                <a
                                                                                                    href="#"
                                                                                                    className={classNames(
                                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                                                                                    )}>
                                                                                                    Support
                                                                                                </a>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                        <Menu.Item>
                                                                                            {({ active }) => (
                                                                                                <a
                                                                                                    href="#"
                                                                                                    className={classNames(
                                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
                                                                                                    )}>
                                                                                                    License
                                                                                                </a>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                        <form method="POST" action="#">
                                                                                            {uid == user.uid && (
                                                                                                <Menu.Item>
                                                                                                    {({ active }) => (
                                                                                                        <button
                                                                                                            type="submit" onClick={deletePost}
                                                                                                            className={classNames(
                                                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-red-700', 'block w-full px-4 py-2 text-left text-sm'
                                                                                                            )}>
                                                                                                            Delete Post
                                                                                                        </button>
                                                                                                    )}
                                                                                                </Menu.Item>
                                                                                            )}
                                                                                        </form>
                                                                                    </div>
                                                                                </Menu.Items>
                                                                            </Transition>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <div className='ml-12 mt-2 mb-4'>
                                                                    <p>{post.data().posttext}</p>
                                                                </div>
                                                                <div className='max-w-48 '>
                                                                    {post.data().image && (
                                                                        <img src={post.data().image} alt="" className='w-96 ml-12 rounded-lg shadow-md' />
                                                                    )}
                                                                    {post.data().video && (
                                                                        <video muted autoPlay loop controls src={post.data().video} className="rounded-lg w-72 ml-12 shadow-md"></video>
                                                                    )}
                                                                </div>
                                                                <div>

                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )}

                                            {selectedTab === "likes" && (
                                                <div>
                                                    {userLikes.map(likes => {
                                                        return (
                                                            <div className='' key={likes.id}>
                                                                <h1>{likes.data().username}</h1>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hidden lg:inline-grid lg:cols-span-3">
                            <div className="fixed top-20">
                                <MiniProfile />
                                <Suggestions />
                            </div>
                        </section>
                    </main>
                )
            })}
      </div>
     
    )
}

export default User