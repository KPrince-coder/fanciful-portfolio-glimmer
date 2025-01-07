import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Mail, Lock } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export default function AdminLogin() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (signInError) {
        let errorMessage = "Invalid login credentials";
        if (signInError.message.includes("Email not confirmed")) {
          errorMessage = "Please verify your email address before signing in";
        }
        throw new Error(errorMessage);
      }

      if (user) {
        const { data: adminData, error: adminError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (adminError || !adminData) {
          throw new Error('Not authorized as admin');
        }

        toast({
          title: "Success",
          description: "Logged in successfully",
        });
        
        navigate('/admin');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      <div className="w-full max-w-md space-y-8 glass-card p-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-secondary">
            Admin Login
          </h2>
          <p className="text-gray-400">
            Please sign in to access the admin panel
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-hover:text-secondary" />
                      <Input 
                        {...field} 
                        type="email" 
                        className="bg-accent/50 border-accent pl-10 h-12 text-white placeholder:text-gray-400 
                          focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none
                          hover:border-secondary hover:bg-accent/70 transition-all duration-300" 
                        placeholder="Enter your email"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Password</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-hover:text-secondary" />
                      <Input 
                        {...field} 
                        type="password" 
                        className="bg-accent/50 border-accent pl-10 h-12 text-white placeholder:text-gray-400 
                          focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none
                          hover:border-secondary hover:bg-accent/70 transition-all duration-300" 
                        placeholder="Enter your password"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/80 text-primary font-semibold h-12 transition-colors"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}