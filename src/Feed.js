import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import { db } from './firebase';
import InputOptions from './InputOptions';
import Post from './Post';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const user = useSelector(selectUser);
    const [posts,setPosts] = useState([]);
    const [input,setInput] = useState("");
    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot=>
        setPosts(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data(),
        }))))
    },[])
    const sendPost =(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoUrl: user?.photoURL || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions title="Photo" Icon={Image} color="#70B5F9" />
                    <InputOptions title="Video" Icon={Subscriptions} color="#E7A33E" />
                    <InputOptions title="Event" Icon={EventNote} color="#C0CBCD" />
                    <InputOptions title="Write article" Icon={CalendarViewDay} color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
            {
                posts.map(post=>(
                    <Post 
                          key={post.id}
                          name={post.data.name}
                          description={post.data.description}
                          message={post.data.message} 
                          photoUrl = {post.data.photoUrl}
                        />
                ))
            }
            </FlipMove>
        </div>
    )
}

export default Feed
