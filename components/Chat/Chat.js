import { ArrowLeftIcon, EllipsisVerticalIcon, FaceSmileIcon, PaperAirplaneIcon, PaperClipIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where, updateDoc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase'
import { useRecoilState } from 'recoil';
import { ChatAtomState } from '../../atoms/ChatAtom';
import firebase from '@firebase/app-compat';
import {orderBy } from '@firebase/firestore'


// Main Function Starts Here 

function Chat() {
  
  const [user] = useAuthState(auth);
  const [selectedChat, setSelectedChat] = useRecoilState(ChatAtomState)
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([])
  const [selectedChatData, setSelectedChatData] = useState([])
  const [selectedPhotoURL, setSelectedPhotoURL] = useState([]) 

  const sendMessage = async (e) => {
    e.preventDefault();
    const messagetosend = message;
    setMessage('')
      if(messagetosend !== "" && " "){
        await addDoc(collection(db, "userChat", user.uid, "Contacts", selectedChat, 'messages'), {
          message: messagetosend,
          username: user.displayName,
          userImage: user.photoURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          uid: user.uid
        })
        await addDoc(collection(db, "userChat", selectedChat, "Contacts", user.uid, 'messages'), {
          message: messagetosend,
          username: user.displayName,
          userImage: user.photoURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          uid: user.uid
        })
      }
    // await setDoc(collection(db,'userChat', selectedChat, "Contacts", user.uid,'latestMessage'),{
    //   latestMessage: messagetosend,
    //   username: user.displayName,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   uid: user.uid
    // })
  }
 
   onSnapshot(query(collection(db, 'userChat', user.uid, "Contacts", selectedChat, "messages"), orderBy('timestamp')),
        snapshot => {
          setSentMessages(snapshot.docs)
        }
      ),
    [db]

    ; (async () => {
      const docRef = doc(db, 'users', selectedChat);
      const snapshots = await getDoc(docRef)
      const username = snapshots.data()?.username
      setSelectedChatData(username)
      const photoURL = snapshots.data()?.photoURL
      setSelectedPhotoURL(photoURL)


    })()
   
  

  return (
    <div className=''>
      <div className='bg-white  border border-white hidden lg:block mt-6 mx-auto rounded-xl mr-4 xl:w-[98%] lg:w-[92%] h-full'>
        {selectedChat != "Undefined" &&(
          <div>
            <div className='flex  p-2  items-center justify-between'>
              {/* {contactInfo.map(info => {
         return( */}
              <div className="flex items-center space-x-2">
                <img src={selectedPhotoURL} className="w-8 h-8 rounded-full" />
                <span className=' font-bold '>{selectedChatData}</span> 
              </div>

              <div className='flex space-x-4 items-center'>
                <VideoCameraIcon onClick={fetch} className='w-4 h-4 ' />
                <PhoneIcon className='w-4 h-4' />
                <EllipsisVerticalIcon className='w-5 h-5  ml-4' />
              </div>
            </div>

            <div className=" overflow-y-scroll scroll-auto  scrollbar-hide h-[calc(100vh-15rem)] mb-4">



              {sentMessages.map(message => {
                return (
                  <div key={message.id} className="mt-2">
                    {user.uid === message.data().uid ? (
                      <div key={message.id}>
                        <div className=" flex justify-end ">
                          <h1 className='w-fit p-1 rounded-xl max-w-[50%] pl-2 pr-2 text-white font-bold  mr-4 mt-2 bg-blue-800   '>{message.data().message}</h1>
                        </div>
                      </div>
                    ) : (
                      <div >
                        <div className='flex justify-start'>
                          <h1 className='w-fit  font-bold text-white bg-gray-600  pl-2 pr-2 p-1 rounded-xl ml-4 mt-2'>{message.data().message}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

            </div>
            <div className="">
              <div className=' mb-6 flex  ml-2 items-end  justify-center '>
                <div className="flex items-center w-full ml-6 mr-6 ">
                  <div className="flex space-x-2">
                    <FaceSmileIcon className='w-6' />
                    <PaperClipIcon className="w-6" />
                  </div>
                  <input value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
                  <PaperAirplaneIcon onClick={sendMessage} disabled={!message.trim()}  type='submit' className='mr-2 h-8 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedChat == "Undefined" && (
          <div className='h-[calc(100vh-7.2rem)] '>
            <div className='ml-[14rem]'>
              <h1>Please select a chat to continue</h1>
              
            </div>
          </div>
        )}
      </div>











      {selectedChat != "Undefined" && (
      <div className='lg:hidden border border-white mt-6 mr-4 rounded-xl  ml-4 h-full bg-white'>
           <div className='flex p-2  items-center justify-between'>
          {/* {contactInfo.map(info => {
         return( */}
          <div className="flex items-center space-x-2">
            <img src={selectedPhotoURL} className="w-8 h-8 rounded-full"/>
            <span className=' font-bold '>{selectedChatData}</span>
          </div>
          {/* )
       })} */}
          <div className='flex space-x-4 items-center'>
            <VideoCameraIcon onClick={fetch} className='w-4 h-4 ' />
            <PhoneIcon className='w-4 h-4' />
            <EllipsisVerticalIcon className='w-5 h-5  ml-4' />
          </div>
        </div>

        <div className=" overflow-y-scroll scrollbar-hide h-[68vh]">



          {sentMessages.map(message => {
            return (
              <div key={message.id} className="">
                {user.uid === message.data().uid ? (
                  <div key={message.id}>
                    <div className=" flex justify-end ">
                      <h1 className='w-fit p-1 rounded-xl max-w-[50%] pl-2 pr-2 text-white font-bold  mr-4 mt-2 bg-blue-800   '>{message.data().message}</h1>
                    </div>
                  </div>
                ) : (
                    <div >
                      <div className='flex justify-start'>
                        <h1 className='w-fit  font-bold text-white bg-gray-600  pl-2 pr-2 p-1 rounded-xl ml-4 mt-2'>{message.data().message}</h1>
                      </div>
                    </div>
                )}
              </div>
            )
          })}
          {/* {receivedMessages.map(message => {
          return (
            
          )
        })} */}



        </div>
        <div className="">
          <div className=' mb-6 flex  ml-2 items-end  justify-center '>
            <div className="flex items-center w-full ml-6 mr-6 ">
              <div className="flex space-x-2">
                <FaceSmileIcon className='w-6' />
                <PaperClipIcon className="w-6" />
              </div>
              <input value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
                <PaperAirplaneIcon  onClick={sendMessage} disabled={!message.trim()} type='submit' className='mr-2 h-8 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Chat