'use client'
import { useState } from "react";
import {signIn} from 'next-auth/react'

export default function Login(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState(false);
    const [loginInProgress , setLoginInProgress] = useState(false)


    async function handlesubmit(event){
        event.preventDefault();
        // setError(false)
        // setLoginInProgress(true)
        //  try{
        //   await fetch('/api/login', {
        //     body : JSON.stringify({email , password }),
        //     method : 'POST',
        //     headers : {
        //         'content-type': 'application/json'
        //     }
        //   })
        //   setLoginInProgress(false)
        //  }catch(e){
        //     setError(true)
        //     setLoginInProgress(false)
        //  }

       await signIn('credentials' , {email , password, callbackUrl : '/' });
    }
    return (
        <section className="mt-8">
        <h1 className="text-4xl text-center text-primary mb-4">Login</h1>
        <form className="max-w-xl mx-auto" onSubmit={(event)=>handlesubmit(event)}>
            <input disabled={loginInProgress}name="email" type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} required/>
            <input disabled={loginInProgress} name="password" type="password" placeholder="Password"   value={password} onChange={(event)=>setPassword(event.target.value)} required/>
            <button type="submit" className="button" disabled={loginInProgress}>Login</button>
            <p className="text-center text-gray-600  my-4">Or login with provider</p>
            <button className="button" type="button" onClick={()=>signIn('google' , {callbackUrl : '/'})}>Login with google</button>
        </form>
    </section>
    )
}