import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, User, MessageCircle, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.subject || !data.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    form.reset();
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
              Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Location: Your City, Country</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </div>
            </div>
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
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Your Name"
                name="name"
                className="bg-card border-accent pl-12"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-card border-accent pl-12"
              />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Subject"
                name="subject"
                className="bg-card border-accent pl-12"
              />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <Textarea
                placeholder="Your Message"
                name="message"
                className="bg-card border-accent pl-12 h-32"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-secondary text-primary hover:bg-secondary/90 flex items-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;