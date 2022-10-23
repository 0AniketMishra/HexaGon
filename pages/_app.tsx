import '../styles/globals.css';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from '../firebase'
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import { useEffect, useState } from 'react';
import Login from './login';
import { RecoilRoot } from "recoil"
import Loading from '../components/Common/Loading';
import { collection, doc } from 'firebase/firestore';

function MyApp({ Component, pageProps }: any) {

  const [exists, setExists] = useState(false)
  const [user, loading] = useAuthState(auth)
  const doesDocExist = (docID) => {
    return db.collection("users").doc(user.uid).get().then((doc) => {
       setExists(true)
    })
  }
  useEffect(() => {
    if (user && exists===false) {
      db.collection('users').doc(user.displayName.replace(/\s+/g,'').toLowerCase()).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
        username: user.displayName,
        about: "Hey There I am using HexaGon",
        phone: user.phoneNumber,
        uid: user.uid,
        slug: user.displayName.replace(/\s+/g, '').toLowerCase(),
        lowerUsername: '@' + user.displayName.replace(/\s+/g, '').toLowerCase()
      },
        { merge: true });
    } else{
      
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return (

    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
