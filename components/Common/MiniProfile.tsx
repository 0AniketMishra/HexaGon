import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';

function MiniProfile() {
  const [userInfo, setUserInfo] = useState([])

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'users',), where("uid", "==", user.uid)),
        snapshot => {
          setUserInfo(snapshot.docs)
        }
      ),
    [db]
  );

  const [user] = useAuthState(auth);
  return (
  
 <div>
  {userInfo.map(info => {
    return(
      <div className="flex w-60 bg-white p-2 rounded-xl items-center justify-between  mr-4 " key={info.id}>
        <img src={info.data().photoURL} alt="" className="w-12 h-12 rounded-full border p-[2px]" />
        <div className="flex-1 ml-2">
          <h2 className="font-bold text-xs ">{info.data().username}</h2>
          <h3 className=" text-gray-400 text-xs mr-2">Welcome to HexaGon</h3>
          <button className="text-blue-400  font-semibold text-xs" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    )
  })}
 </div>

   
    
  )
}

export default MiniProfile