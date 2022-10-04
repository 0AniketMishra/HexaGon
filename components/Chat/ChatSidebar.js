import { collection, doc, onSnapshot, query } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase'
import ChatHeader from './ChatHeader'
import { ChatAtomState } from '../../atoms/ChatAtom';
import { useRecoilState } from 'recoil';

function ChatSidebar() {

  const [user] = useAuthState(auth);
  const [contacts, setContacts] = useState([])
  const [selectedChat, setSelctedChat] = useRecoilState(ChatAtomState)
  const [selectedChatUid, setSelctedChatUid] = useState([])


  // useEffect(() => onSnapshot(collection(db, 'userChat', user.uid, 'Contacts'), (snapshot) =>
  //   setContacts(snapshot.docs)), [db]
  // )

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'userChat', user.uid, "Contacts")),
        snapshot => {
          setContacts(snapshot.docs)
        }
      ),
    [db]
  );

  return (


 <div>
      <div className=' hidden lg:block mt-6 mb-8 ml-4 xl:w-64 rounded-xl  overflow-y-scroll scrollbar-hide bg-white top-14  fixed bottom-0'>
        <ChatHeader />
        <div className='h-[72vh]'>
          {contacts.map(contact => {
            return (
              <div key={contact.id} onClick={() => setSelctedChat(contact.data().uid)} className='flex cursor-pointer rounded-lg mb-4 ml-2 mr-2 p-2  hover:bg-gray-100 items-center'>
                <div>
                  <img src={contact.data().photoURL} alt="" className=' border p-[1px] mt-2  bg-white w-12 h-12 rounded-full ' />
                </div>
                <div className=''>
                  <h1 className='ml-1 font-bold text-black '>{contact.data().username}</h1>
                  <h1 className='ml-1 text-black text-sm truncate w-40 '>This is a sample of a latest message </h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {selectedChat == "Undefined" && (
      <div className='lg:hidden mt-6 bg-white mb-8 ml-4 mr-4 border rounded-lg  overflow-y-scroll scrollbar-hide   h-[82vh]'>
          <ChatHeader />
          <div className='h-[72vh]'>
            {contacts.map(contact => {
              return (
                <div key={contact.id} onClick={() => setSelctedChat(contact.data().uid)} className='flex cursor-pointer rounded-lg mb-4 ml-2 mr-2 p-2  hover:bg-gray-200 items-center'>
                  <div>
                    <img src={contact.data().photoURL} alt="" className=' border p-[1px] mt-2  bg-white w-12 h-12 rounded-full ' />
                  </div>
                  <div className=''>
                    <h1 className='ml-1 font-bold text-black '>{contact.data().username}</h1>
                    <h1 className='ml-1 text-black text-sm truncate w-40 '>This is a sample of a latest message </h1>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
      )}
 </div>
  )
}

export default ChatSidebar

