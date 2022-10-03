import { PencilSquareIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";

function Sidebar() {

    const [user] = useAuthState(auth);
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [userInfo, setUserInfo] = useState([])
    
        useEffect(() => onSnapshot(collection(db, 'users', user.uid, 'followers'), (snapshot) =>
        setFollowers(snapshot.docs)), [db]
    )
    useEffect(() => onSnapshot(collection(db, 'users', user.uid, 'following'), (snapshot) =>
        setFollowing(snapshot.docs)), [db]
    )
    useEffect(
        () =>
            onSnapshot(query(collection(db, 'users',), where("uid","==", user.uid)),
                snapshot => {
                    setUserInfo(snapshot.docs)
                }
            ),
        [db]
    );

    return (
        <div className="overflow-y-scroll h-[85vh] scrollbar-hide">
            <div className=" ml-6 xl:ml-16 w-60 ">
              {userInfo.map(info => {
                return(
                    <div className=" rounded-2xl overflow-hidden bg-white " key={info.id}>
                        <img src="https://i.imgur.com/dYcYQ7E.png" className="" />
                        <div className="flex ml-4 -mt-8">
                            <img src={info.data().photoURL} className="rounded-full -mt-0.1 w-16 p-[2px] border bg-white h-16" />
                        </div>
                        <div className="px-3 pb-6 pt-2 ml-4">
                            <div className="flex items-center ">
                                <h3 className="text-black text-sm bold font-bold">{info.data().username}</h3>
                                <PencilSquareIcon className="w-3 ml-1 cursor-pointer " /> 
                            </div>
                            <p className="mt-2 font-sans font-light text-black">Hello, I am from another the other side!</p>
                        </div>
                        <div className="flex justify-center pb-3 text-black font-bold text-sm">

                            <div className="text-center mr-3 border-r pr-3 flex space-x-1 ">
                                <h2>{followers.length}</h2>
                                <span >Followers</span>
                            </div>

                            <div className="text-center flex space-x-1">
                                <h2>{following.length}</h2>
                                <span>Following</span>
                            </div>
                        </div>
                    </div>
                )
              })}


            </div>

            <div className="xl:ml-16 bg-white mt-8 ml-6 w-60 rounded-xl p-2 mb-4 ">
                <div className="flex">
                    <h1 className="font-bold text-lg ml-2">Explore</h1>
                    <h1 className="flex-1"></h1>
                    <SparklesIcon className="w-6 mr-2"/>
                </div>
                <div className=" mt-4 p-2">
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#embedded</h1>
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#boycott</h1>
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#fun</h1>
                    <h1 className="font-bold bg-gray-100 hover:text-blue-500 cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">#money</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar