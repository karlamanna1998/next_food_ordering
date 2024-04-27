import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { userModel } from "../../models/userModel";
import bcrypt from 'bcrypt'
import GoogleProvider from "next-auth/providers/google";

export const OPTIONS = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "Example@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          await mongoose.connect(process.env.MONGO_URL)

          let user = await userModel.findOne({ email: credentials.email })

          let passwordOk = user && bcrypt.compareSync(password, user.password)

          if (passwordOk) {
            return user
          }

          return null
        } catch (e) {
          return null
        }

      }
    })
  ],
  pages: {
    signIn: '/login',
  }
}

const handler = NextAuth(OPTIONS)

export { handler as GET, handler as POST }