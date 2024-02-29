'use client'

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react'
import { toast } from "sonner"

export default function FormLogin() {
  interface ILogin {
    email: string
  }

  const { handleSubmit, register } = useForm<ILogin>()

  const submit = async (data: ILogin) => {
    try {
      await signIn('email', { email: data.email, redirect: false })
      toast('Send email!', {
        description: 'Please, check your e-mail for login!'
      })
      console.log('aa')
    } catch (error) {
      toast('Error to login!', {
        description: 'An error occurred, please try again!'

      })
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div>Login</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Login with magic link.</p>
      </CardHeader>
      <form onSubmit={handleSubmit(submit)}>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="code">Enter the e-mail</Label>
            <Input {...register("email")} placeholder="email@email.com" />
          </div>
          <Button type="submit">Login/Register</Button>
        </CardContent>
      </form>
    </Card>
  )
}

