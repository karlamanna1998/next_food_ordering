'use client'

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react"

export default function Register(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [userCreated , setUserCreated] = useState(false);
    const [userCreating , setUserCreating] = useState(false);
    const [error , setError] = useState(false);

    async function  handlesubmit(event){
        event.preventDefault()
        setUserCreating(true)
        setError(false)
        try{
         await  fetch('/api/register',{
            method : 'POST',
            body  : JSON.stringify({email, password}),
            headrs : {
                'content-type' : 'application/json'
            }
          })
          setUserCreating(false)
          setUserCreated(true)
          setEmail('')
          setPassword('')
          setTimeout(() => {
            setUserCreated(false)
          }, 5000);

        }catch(error){
            setError(true)
           console.log(error)
        }
    }
    return (
        <section className="mt-8">
            <h1 className="text-4xl text-center text-primary mb-4">Register</h1>
            {userCreated && <p className="text-center mb-3">User created <br/> <span>Now you can <Link className="font-semibold" href="/login">Login &#11162;</Link></span> </p>}
            <form className="max-w-xl mx-auto" onSubmit={(event)=>handlesubmit(event)}>
                <input disabled={userCreating} type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} required/>
                <input disabled={userCreating} type="password" placeholder="Password"   value={password} onChange={(event)=>setPassword(event.target.value)} required/>
                <button type="submit" className="button" disabled={userCreating}>Register</button>
                <p className="text-center text-gray-600  my-4">Or login with provider</p>
                <button className="button" type="button" onClick={()=>signIn('google' , {callbackUrl : '/'})}>Login with google</button>
            </form>
        </section>
    )
}