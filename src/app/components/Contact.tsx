"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { formSchema } from "../utils/zodSchema";
import { useForm } from "react-hook-form";
import { submit } from "@/app/api/submit";
import { toast } from "sonner";

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const result = await submit(values);
    if (result.status === "error") {
      if (result.code) {
        toast.error(result.code + ' ' + result.message);
      }
    }
    else {
      toast.success(result.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Enter your name: </FormLabel>
            <FormControl>
              <Input placeholder="Aizen Souske" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Enter your email: </FormLabel>
            <FormControl>
              <Input placeholder="great@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>Enter your message: </FormLabel>
            <FormControl>
              <Textarea
               placeholder="How are you?"
              className="resize-none"
              {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>
        <Button type="submit" className="hover:text-amber-400 cursor-pointer">Submit</Button>
      </form>
    </Form>
  )
}