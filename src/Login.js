import React, { useState } from 'react';
import './Login.css';
import LinkedIn from './app/linkedin.png';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';

function Login() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [profilepic,setProfilepic] = useState("")
    const dispatch = useDispatch();

    const loginapp = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                photoURL: userAuth.user.photoURL,
                displayName:userAuth.user.displayName,
            }));
            console.log(userAuth.user.photoURL);
        }).catch(err=>alert(err));
    }
    const register = ()=>{
        if(!name){
            return alert("Please enter your full name!")
        }
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilepic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }));
            })
            console.log(userAuth);
        }).catch((err)=>alert(err))
    }
    return (
        <div className="login">
            <img src={LinkedIn} alt="" />
            <form>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />

                <input value={profilepic} onChange={(e)=>setProfilepic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />

                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginapp}>Sign In</button>
            </form>
            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span> </p>
        </div>
    )
}

export default Login
