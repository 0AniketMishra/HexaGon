import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import {doc, getDoc, onSnapshot, collection, deleteDoc, setDoc, query, where, getDocs} from "firebase/firestore";
import {db}  from '../../firebase'
import Header from '../../components/Common/Header';
import MiniProfile from '../../components/Common/MiniProfile';
import Suggestions from '../../components/Common/Suggestions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { BellIcon, EllipsisHorizontalCircleIcon, EyeIcon, PencilIcon, PencilSquareIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Moment from 'react-moment';
import { Tab } from '@headlessui/react';
import Sidebar from '../../components/Common/Sidebar';
import { useRecoilState } from 'recoil';
import { followState } from '../../atoms/followAtom';
import FollowModal from '../../components/Modal/FollowModal';
import { pidState } from '../../atoms/pidAtom';
import {CustomizeState} from '../../atoms/CustomizeAtom'
import CustomizeModal from '../../components/Modal/CustomizeModal';
import { userInfo } from 'os';


const User = ({
    id,
}) => {
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
    useEffect(
        () =>
            onSnapshot(query(collection(db, 'users',), where("uid", "==", pid)),
                snapshot => {
                    setUserInfo(snapshot.docs)
                }
            ),
        [db]
    );
    const [Open, setOpen] = useRecoilState(CustomizeState)

    return( 
      <div className='bg-gray-100'>
            <Header />
            <FollowModal/>
            <CustomizeModal/>
           {userInfo.map(info => {
            return(
               <main className='grid grid-cols-1   lg:grid-cols-12 lg:max-w-7xl mx-auto' key={info.id}>
                   <section className='lg:col-span-3 md:col-span-0 hidden lg:inline-flex'>
                       <div className="fixed top-20">
                           <Sidebar />
                       </div>
                   </section>
                   <section className="lg:col-span-6 md:col-span-6 w-[90%] mx-auto h-screen">
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
                                               <UserPlusIcon onClick={ContactUser} className=' border-blue-500 border bg-blue-500 text-white w-10 h-10  mt-7 cursor-pointer  rounded-full p-2  ' />

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
                                               <a className="text-gray-400  hover:text-blue-500" target="BLANK()">@{info.data().username.replace(/\s+/g, "").toLowerCase()}</a>
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

                                       </div>



                                       <div className="flex mt-6 ">


                                       </div>
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