'use client'

import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"

const UserInfo = () => {
  // const session = await auth()
  // console.log('->', session)
  const { data, status } = useSession()
  return (
      <div>
         <p>Logged with email: { data?.user?.email }</p>
          <Button onClick={() => signOut()}>Sign out</Button>
      </div>
  )
}

export default UserInfo