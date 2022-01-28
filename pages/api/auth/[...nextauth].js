import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [ 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],

  pages:{
      signIn: "/auth/signin",
      nasa: "/NASA",

  },

  callbacks: {
      async session({session, token, user}){
          session.user.username = session.user.name
          .split(' ')
          .join("")
          .toLocaleLowerCase();
          session.user.uid = token.sub;
          return session;    
      }
  }
})