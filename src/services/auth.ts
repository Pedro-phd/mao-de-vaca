import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
console.log(process.env.EMAIL_SERVER, process.env.EMAIL_FROM)
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    newUser: '/app',
    signIn: '/auth',
    signOut: '/auth',
    verifyRequest: '/auth',
    error: '/auth'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM
  })
],
})