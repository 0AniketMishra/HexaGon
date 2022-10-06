import React, { useEffect, useState } from 'react'
import Post from './Post'
import {onSnapshot, collection, query, orderBy} from '@firebase/firestore'
import { db } from '../../firebase';
import firebase from 'firebase/compat';

function Posts() {

  const [posts , setPosts] = useState([]);
  useEffect(
    () => 
 onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  snapshot => {
      setPosts(snapshot.docs)
    }
    ),
    [db]
  );

  const sendComment = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          img={post.data().image}
          vid={post.data().video}
          posttext={post.data().posttext}
          timestamp={post.data().timestamp}
          lowerUsername={post.data().lowerUsername}
          uid={post.data().uid}
        
        />
      ))}
    </div>
    );
  
}

export default Posts


