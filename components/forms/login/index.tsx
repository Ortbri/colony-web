'use client'

import { Button } from '@/components/ui/button'
import { VscLoading } from 'react-icons/vsc'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { loginSchema } from './login.schema'
import { error } from 'console'

export const LoginForm = (): React.ReactElement => {
  /* ---------------------------------- state --------------------------------- */
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  })
  const {
    formState: { isSubmitting }
  } = form

  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)) // 3 second while testing
      console.log('inside of handle try')
      console.log(data)
    } catch (err) {
      console.log(err)
    } finally {
      // setLoading(false)
      console.log('finally')
    }
  }

  return (
    <Card className='w-full max-w-md bg-black shadow-xl'>
      <CardHeader>
        <CardTitle className='text-xl'>Sign In</CardTitle>
        <CardDescription>Colony Admin Panel</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <Label>Email</Label>
                    <FormControl>
                      <Input placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <Label>Password</Label>
                    <FormControl>
                      <Input
                        placeholder='Password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit' className='w-full' disabled={isSubmitting}>
              {isSubmitting ? (
                <VscLoading className='h-4 w-4 animate-spin' />
              ) : (
                <span>Sign In</span>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
