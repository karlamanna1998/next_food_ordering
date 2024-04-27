import mongoose from "mongoose"
import { userModel } from "../models/userModel";
import { NextResponse } from "next/server";
// import { userModel } from "../models/userMOdel"

export async function POST(req) {
    try {
        const body = await req.json()

        await mongoose.connect(process.env.MONGO_URL)

        const newUser = await userModel.create(body); 

        // userModel
        return NextResponse.json({ data: newUser, message: 'user created' }, {status : 200})

    } catch (e) {
        console.log(e, 'errrrrrrrr')
        return NextResponse.json({error : e.message} , {status : 500})
    }
}