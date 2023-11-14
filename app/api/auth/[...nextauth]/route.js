import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import EmailProvider from 'next-auth/providers/email'

import User from '@/models/user'
import { connectToDB } from '@/utils/database'

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  // callbacks: {
  //   async session({ session }) {
  //     // Check the session to see if user is logged in
  //     const sessionUser = await User.findOne({ email: session.user.email })

  //     session.user.id = sessionUser._id.toString();

  //     return session;
  //   },

  //   async signIn({ profile }) {
  //     try {
  //       await connectToDB();

  //       // check if a user already exists
  //       const userExists = await User.findOne({ email: profile.email });
  //       // if not, create a new user and save to DB
  //       if(!userExists) {
  //         await User.create({
  //           email: profile.email,
  //           username: profile.name.replace(" ", " ").toLowerCase(),
  //           image: profile.picture,
  //         })};
  //       return true;
  //     } catch (error) {
  //       console.log(error);
  //       return false;
  //     }
  //   }
  // },
  // secret: process.env.NEXT_AUTH_SECRET,
  }
)

export { handler as GET, handler as POST }