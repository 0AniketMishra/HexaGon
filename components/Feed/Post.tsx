import React, { useEffect, useState } from 'react'
import { ArrowsRightLeftIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, PencilIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { onSnapshot, collection, addDoc, doc, deleteDoc, setDoc, query, orderBy, where, getDocs } from '@firebase/firestore'
import { db } from '../../firebase';
import firebase from '@firebase/app-compat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Moment from 'react-moment';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { ShareAtomState } from '../../atoms/ShareAtom';
import { useRecoilState } from 'recoil';
import { postPidState } from '../../atoms/postPidAtom';
import { commentModalState } from '../../atoms/commentModalState';
import { postIDAtom } from '../../atoms/postIDAtom';
import { userInfo } from 'os';

function Post({ id, img,vid, posttext, timestamp, uid, lowerUsername, hashTags, atTags }) {

  const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)
  const [user] = useAuthState(auth);
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([])
  const [followers, setFollowers] = useState([])
  const [hasLiked, setHasLiked] = useState(false)
  const [verify, setVerify] = useState([])
  const [verified, setVerified] = useState(false)
  const [userinfo, setUserinfo] = useState([])
  const userRef = collection(db, "users");
  const [shareOpen, setShareOpen] = useRecoilState(ShareAtomState)
  const [postPidValue, setPostPidValue] = useRecoilState(postPidState)
  const [Open, setOpen] = useRecoilState(commentModalState)
  const [searchUser, setSearchUser] = useState("")
  const [value, setValue] = useState([])
  const [PostID, setID] = useRecoilState(postIDAtom)

  useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
    setLikes(snapshot.docs)), [db, id]
  )

  useEffect(() => onSnapshot(collection(db, 'users', uid, 'followers'), (snapshot) =>
    setFollowers(snapshot.docs)), [db]
  )

  useEffect(() => {
    setHasLiked(likes.findIndex(like => like.id === user.uid) !== -1)
  }, [likes])

  useEffect(() => onSnapshot(query(collection(db, 'posts', id, "comments"), orderBy('timestamp', 'desc')), snapshot =>
    setComments(snapshot.docs)), [db, id])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', user.uid), {
        username: user.displayName,
      });
    }
  };

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
  

  console.log(atTags)

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'users',), where("uid", "==", uid)),
        snapshot => {
          setUserinfo(snapshot.docs)
        }
      ),
    [db]
  );
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'users',), where("lowerUsername", "==", searchUser)),
        snapshot => {
          setValue(snapshot.docs)
        }
      ),
    [db]
  );

      
  const sendComment = async (e) => {
    e.preventDefault();
    const commenttoSend = comment;
    setComment('')
    await addDoc(collection(db, "posts", id, 'comments'), {
      comment: commenttoSend,
      username: user.displayName,
      userImage: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    })
  }
  const deleteComment = async (e) => {
    e.preventDefault();
   {comments.map(async comment => {
     await deleteDoc(doc(db, 'posts', id, 'comments', comment.id));
   })}
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
     
         
        
      <div className="mr-2  ml-2 lg:mr-2 lg:ml-2 mt-2 p-2 rounded-2xl  items-center bg-white   ">
        <div className="flex items-center ">

          {userinfo.map(info => {
            return (
              <div className="flex  items-center " key={info.id}>
                <div>
                  <img src={info.data().photoURL} alt="" className="w-12 h-12 rounded-full p-1 border mb-2" />
                </div>
                <div className=" items-center">
                  <div className="flex items-center">
                    <Link href={'/users/' + info.data().slug}>
                      <a>
                        <h1 className="text-sm font-bold ml-2 hover:text-blue-500 cursor-pointer " >{info.data().username}</h1>
                      </a>
                    </Link>
                    {followers.length > 10 && (
                      <img src="https://th.bing.com/th/id/R.9c88df48e24182943ba4945b92aa3704?rik=ng8QDZfIeaOAvg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgTeEegLRc.png&ehk=rFKFF6hVaGBnpA8yieOD6YZvrGTf6%2fiafNKrPlbD7a8%3d&risl=&pid=ImgRaw&r=0" className='w-4 ml-1 h-4' alt="Verified!" />
                    )}
                  </div>
                  <div className="ml-2 flex">
                    <h1 className="text-xs semi-font-bold">{lowerUsername}</h1>
                    <h1 className="text-xs ml-2">  <Moment fromNow >{timestamp?.toDate()}</Moment></h1>
                  </div>
                </div>
              </div>
            )
          })}



          <h1 className="flex-1"></h1>

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


        <div>
          <Link href={'/posts/' + id}>
            <a>
              <div className="ml-4  mt-2 md:mr-4 ">
                <h1 className="lg:w-[90%] mb-2 mt-4 ml-4 text-lg ">{posttext}</h1>
                <div className="flex items-center space-x-4 p-2 justify-left" >
                  <img src={img} alt="" className='max-h-96 rounded-lg ' />
                  {vid && (
                    <video src={vid} controls autoPlay muted loop className="rounded-lg max-h-[34rem]" />
                  )}
                  




  
                  
  
               
                </div>
               <div className="ml-4">
                  {hashTags && (
                    <div className='flex overflow-y-scroll space-x-2 scrollbar-hide'>
                      {hashTags.map(tag => {
                        return (
                          <ul key={tag.id}>
                            <Link href={'/users/' + tag}>
                              <a>
                                <h1 className="font-bold text-blue-500 bg-gray-100 hover:text-black cursor-pointer p-1 w-fit 00 mt-3 rounded-lg pl-2 pr-2">@{tag}</h1>
                              </a>
                            </Link>
                          </ul>
                        )
                      })}
                    </div>
                  )}{atTags && (
                    <div className='flex overflow-y-scroll space-x-2 scrollbar-hide'>
                      {atTags.map(tag => {
                        return (
                          <div key={tag.id} className="">
                            <Link href={'/users/' + tag}>
                              <a>
                                <h1 className="font-bold text-blue-500 bg-gray-100 hover:text-black cursor-pointer p-1 w-fit  mt-3 rounded-lg pl-2 pr-2">@{tag}</h1>
                              </a>
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  )}
               </div>
                
              </div>
            </a>
          </Link>
        </div>


        <div >
          {commentBoxVisible && (
            <div>
              
               
              {comments.length > 0 && (
                <div>
                  
                  {/* <h1 className='font-bold  mb-4 mt-4 text-lg ml-2'>Comments - </h1> */}
                  <div className='ml-2 items-center mt-6 h-46 overflow-y-scroll scrollbar-hide'>
                    {comments.map(comment => (
                      <div key={comment.id} className=" space-x-2 mb-3 " >
                      
                        <div className="flex items-center ">
                          <img src={comment.data().userImage} alt="" className='h-7 border  rounded-full' />
                         <div>
                          
                          <div className="flex items-center space-x-2">
                            
                              <span className="font-bold text-md  ml-2">{comment.data().username + " : "}</span>
                              <Moment className="text-xs mr-6" fromNow >{comment.data().timestamp?.toDate()}</Moment>
                          </div>
                          <div>
                              {userinfo.map(info => {
                                return (

                                  <div className='ml-2 flex space-x-1'>
                                    <span className="font-semibold text-sm">Replying To</span>
                                    <span className="font-semibold text-sm text-blue-400">{info.data().lowerUsername}</span>
                                  </div>

                                )
                              })}
                          </div>
                         </div>
                          <h1 className="flex-1"></h1>
                          {/* <Moment className="text-xs mr-6" fromNow>{comment.data().timestamp?.toDate()}</Moment> */}
                           {comment.data().uid === user.uid &&(
                            <TrashIcon className='w-4 mr-2 cursor-pointer' onClick={deleteComment}/>
                           )}
                          <EllipsisHorizontalIcon className='w-4 mr-10'/>
                        </div>
                        <p className=" spacex-2 px-6">{comment.data().comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* <form action="" className="flex items-center p-2 mt-4 bg-gray-100 mb-2 ml-2 mr-2 rounded-xl">
                <FaceSmileIcon className='h-6' />
                <input
                  type="text"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder='Add a comment...'
                  className='border-none flex-1 focus:ring-0 outline-none ml-2 bg-gray-100'
                />
                <button disabled={!comment.trim()} type="submit" onClick={sendComment} className="font-semibold text-blue-400 ">Post </button>
              </form> */}
            </div>
          )}


          <div className=" mt-4 p-1 flex space-x-8 lg:ml-8  justify-evenly  lg:mr-8 mb-4">
            <div className=" items-center hover:text-red-500  cursor-pointer ">
              {hasLiked ? (
                <div className='flex' onClick={likePost}>
                  <HeartIcon fill='red' className='h-6 text-red-500 ' />
                  <h1 className='ml-2'>{likes.length}</h1>
                </div>
              ) : (
                <div>
                  <div className='flex' onClick={likePost}>
                    <HeartIcon className='h-6 ' />
                    <h1 className='ml-2'>{likes.length}</h1>
                  </div>
                </div>
              )}
            </div>

            <div onClick={() => setCommentBoxVisible(!commentBoxVisible)} className=" cursor-pointer flex items-center hover:text-blue-500 ">
              <ChatBubbleOvalLeftEllipsisIcon className='h-6 ' />
              <h1 className='ml-2'>{comments.length}</h1>
            </div>


            <div className="flex items-center hover:text-purple-500" onClick={() => {
             setOpen(true);
             setID(id)
            }}>
              <ArrowsRightLeftIcon className='h-6  cursor-pointer' />
              {/* <h1 className='ml-2'>0</h1> */}
            </div>



            <ShareIcon className='h-6   hover:text-green-500 cursor-pointer' onClick={() => {
              setShareOpen(true);
              setID(id)
            }} />
          </div>


        </div>

       
      </div>
       
    </div>
  )
}

export default Post

