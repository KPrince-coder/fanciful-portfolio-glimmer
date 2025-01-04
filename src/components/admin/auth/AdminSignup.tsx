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

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  secretToken: z.string().refine((token) => {
    const currentYear = new Date().getFullYear();
    const pattern = new RegExp(`^ADMIN_${currentYear}_[A-Za-z0-9]+$`);
    return pattern.test(token);
  }, "Invalid admin token format"),
});

export default function AdminSignup() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      secretToken: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data: { user }, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (signUpError) throw signUpError;

      if (user) {
        const { error: adminError } = await supabase
          .from('admin_users')
          .insert([
            {
              id: user.id,
              email: values.email,
              secret_token: values.secretToken,
            }
          ]);

        if (adminError) throw adminError;

        toast({
          title: "Success",
          description: "Admin account created successfully. Please check your email for verification.",
        });
        
        navigate('/admin/login');
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
      <div className="w-full max-w-md space-y-8 bg-accent rounded-lg p-6">
        <div>
          <h2 className="text-2xl font-bold text-center text-secondary">
            Admin Signup
          </h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="bg-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" className="bg-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secretToken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admin Token</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" className="bg-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <Button
            variant="link"
            className="text-secondary"
            onClick={() => navigate('/admin/login')}
          >
            Already have an account? Login
          </Button>
        </div>
      </div>
    </div>
  );
}