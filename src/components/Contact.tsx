import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              className="bg-card border-accent"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-card border-accent"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-card border-accent h-32"
            />
            <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;