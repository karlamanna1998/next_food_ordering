'use client'

import { useState } from "react"

export default function Register(){

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    async function  handlesubmit(event){
        event.preventDefault()
        try{
          fetch('/api/register',{
            method : 'POST',
            body  : JSON.stringify({email, password}),
            headrs : {
                'content-type' : 'application/json'
            }
          })
        }catch(error){
           console.log(error)
        }
    }
    return (
        <section className="mt-8">
            <h1 className="text-4xl text-center text-primary mb-4">Register</h1>
            <form className="max-w-xl mx-auto" onSubmit={(event)=>handlesubmit(event)}>
                <input type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} required/>
                <input type="password" placeholder="Password"   value={password} onChange={(event)=>setPassword(event.target.value)} required/>
                <button type="submit" className="button">Register</button>
                <p className="text-center text-gray-600  my-4">Or login with provider</p>
                <button className="button">Login with google</button>
            </form>
        </section>
    )
}