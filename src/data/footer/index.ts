import {
    Home,
    User,
    Briefcase,
    Code,
    Send,
    Github,
    Linkedin,
    Twitter,
    Mail,
  } from "lucide-react";
  
  export const footerData = {
    copyright: `© ${new Date().getFullYear()} Prince Kyeremeh. All rights reserved.`,
    brandInfo: {
      name: "Prince Kyeremeh",
      tagline:
        "Crafting innovative solutions at the intersection of technology and creativity.",
      // quote: "Code is poetry in motion, design is art in function.",
      quote: "Transforming ideas into elegant, efficient code.",
    },
    quickLinks: [
      {
        name: "Home",
        href: "#hero",
        icon: Home,
        color: "bg-blue-500/10 text-blue-500",
        ariaLabel: "Navigate to Home section",
      },
      {
        name: "About Me",
        href: "#about",
        icon: User,
        color: "bg-green-500/10 text-green-500",
        ariaLabel: "Navigate to About section",
      },
      {
        name: "Projects",
        href: "#projects",
        icon: Briefcase,
        color: "bg-purple-500/10 text-purple-500",
        ariaLabel: "Navigate to Projects section",
      },
      {
        name: "Skills",
        href: "#skills",
        icon: Code,
        color: "bg-cyan-500/10 text-cyan-500",
        ariaLabel: "Navigate to Skills section",
      },
      {
        name: "Contact",
        href: "#contact",
        icon: Send,
        color: "bg-red-500/10 text-red-500",
        ariaLabel: "Navigate to Contact section",
      },
    ],
    socialLinks: [
      {
        icon: Github,
        href: "https://github.com/princekm",
        tooltip: "GitHub Profile",
        color:
          "text-black-900 hover:text-black dark:text-gray-100 dark:hover:text-white",
        glow: "hover:shadow-[0_0_15px_rgba(51,51,51,0.3)] dark:hover:shadow-[0_0_15px_rgba(230,230,230,0.3)]",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/princekm",
        tooltip: "LinkedIn Profile",
        color:
          "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
        glow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/princekm",
        tooltip: "Twitter Profile",
        color:
          "text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",
        glow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]",
      },
      {
        icon: Mail,
        href: "mailto:contact@princekm.dev",
        tooltip: "Send Email",
        color:
          "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
        glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] dark:hover:shadow-[0_0_15px_rgba(248,113,113,0.5)]",
      },
    ],
  };
  