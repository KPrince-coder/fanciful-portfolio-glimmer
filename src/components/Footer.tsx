"use client";

import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";
import { footerData } from "../data/footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <TooltipProvider delayDuration={300}>
      <footer
        className="
        relative 
        py-16 
        bg-gradient-to-br 
        from-blue-500/10 
        via-cyan-500/5 
        to-purple-500/10 
        overflow-hidden
      "
        aria-labelledby="footer-title"
      >
        {/* Neon Border Effect */}
        <div
          className="
          absolute 
          inset-0 
          pointer-events-none 
          border-[4px] 
          border-transparent 
          bg-gradient-to-br 
          from-blue-500/30 
          via-cyan-500/20 
          to-purple-500/30 
          animate-border-gradient 
          opacity-50
        "
          style={{
            backgroundClip: "content-box",
            WebkitBackgroundClip: "content-box",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 relative z-20"
              >
                <a
                  href="#hero"
                  className="
                    flex 
                    items-center 
                    space-x-2 
                    group 
                    inline-block
                  "
                >
                  <Globe
                    className="
                      w-8 h-8 
                      text-blue-500 
                      group-hover:rotate-[360deg] 
                      transition-transform 
                      duration-500
                    "
                  />
                  <h2
                    id="footer-title"
                    className="
                      text-2xl 
                      font-bold 
                      gradient-text 
                      group-hover:tracking-wider 
                      transition-all 
                      duration-300
                    "
                  >
                    {footerData.brandInfo.name}
                  </h2>
                  <Sparkles
                    className="
                      w-5 h-5 
                      text-blue-400 
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity 
                      duration-300
                    "
                  />
                </a>

                {/* Tagline Design */}

                <p className="text-muted-foreground max-w-md relative pl-6">
                  <span
                    className="
                      absolute 
                      left-0 
                      top-1/2 
                      -translate-y-1/2 
                      w-2 
                      h-2 
                      bg-blue-500 
                      rounded-full
                    "
                  />
                  {footerData.brandInfo.tagline}
                </p>
              </motion.div>
            </div>

            {/* Quick Links Section */}
            <div className="flex justify-center items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-xs"
              >
                <h3
                  className="
                  text-xl 
                  font-semibold 
                  mb-6 
                  relative 
                  inline-block
                  after:absolute 
                  after:-bottom-1 
                  after:left-0 
                  after:w-full 
                  after:h-0.5 
                  after:bg-gradient-to-r 
                  after:from-blue-500 
                  after:to-cyan-500
                "
                >
                  Quick Links
                </h3>

                <div className="space-y-4">
                  {footerData.quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="
                      group 
                      flex 
                      items-center 
                      space-x-2 // reduced from space-x-3
                      transition-all 
                      duration-300 
                      hover:pl-1 // reduced from hover:pl-2
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500/50
                    "
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 15,
                          transition: { duration: 0.2 },
                        }}
                        className={`
                        p-1 // reduced from p-2
                        rounded-full 
                        ${link.color}
                        transition-all 
                        duration-300
                      `}
                      >
                        <link.icon className="w-4 h-4" />
                      </motion.div>
                      <span
                        className="
                      text-sm // added to reduce text size
                      group-hover:text-blue-500 
                      transition-colors 
                      duration-300
                    "
                      >
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Social Links Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3
                  className="
                  text-xl 
                  font-semibold 
                  mb-6 
                  relative 
                  inline-block
                  after:absolute 
                  after:-bottom-1 
                  after:left-0 
                  after:w-full 
                  after:h-0.5 
                  after:bg-gradient-to-r 
                  after:from-blue-500 
                  after:to-cyan-500
                "
                >
                  Let's Connect
                </h3>

                <div className="flex space-x-4">
                  {footerData.socialLinks.map((social) => (
                    <Tooltip key={social.href}>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            y: -10,
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                          className={`
                          p-3 
                          rounded-full 
                          transition-all 
                          duration-300 
                          ${social.color}
                          ${social.glow}
                          hover:bg-background/10 
                          dark:hover:bg-white/10 
                          group 
                          relative 
                          overflow-hidden 
                          cursor-pointer
                        `}
                        >
                          <social.icon
                            className="
                            w-6 
                            h-6 
                            relative 
                            z-10 
                            transition-transform 
                            group-hover:rotate-12
                          "
                          />
                          <span
                            className="
                            absolute 
                            inset-0 
                            bg-gradient-to-r 
                            from-transparent 
                            via-white/20 
                            to-transparent 
                            opacity-0 
                            group-hover:opacity-100 
                            transition-opacity 
                            duration-300 
                            pointer-events-none 
                            animate-pulse-slow
                          "
                          />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        className="
                        bg-foreground/90 
                        text-background 
                        dark:bg-background/90 
                        dark:text-foreground 
                        rounded-md 
                        px-3 
                        py-1 
                        text-xs
                        shadow-lg
                        border
                        border-blue-500/20
                      "
                      >
                        {social.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated Gradient Separator */}
          <div
            className="
            my-12 
            relative 
            h-0.5 
            overflow-hidden
          "
          >
            <div
              className="
              absolute 
              inset-0 
              bg-gradient-to-r 
              from-transparent 
              via-blue-500/50 
              to-transparent 
              animate-border-gradient
            "
            />
          </div>

          {/* Quote and Copyright Section */}
          <div className="text-center space-y-6">
            {/* Large Quote */}
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
              text-2xl 
              italic
              md:text-3xl 
              font-bold 
              text-muted-foreground 
              max-w-4xl 
              mx-auto 
              relative 
              px-4
              before:absolute 
              before:left-0 
              before:top-0 
              before:w-1 
              before:h-full 
              before:bg-gradient-to-b 
              before:from-blue-500 
              before:to-transparent
            "
            >
              "{footerData.brandInfo.quote}"
            </motion.blockquote>

            {/* Copyright Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 pt-8"
            >
              <p
                className="
                text-sm 
                text-muted-foreground 
                relative 
                inline-block
                pl-4
                before:absolute 
                before:left-0 
                before:top-1/2 
                before:-translate-y-1/2 
                before:w-2 
                before:h-2 
                before:bg-blue-500 
                before:rounded-full
              "
              >
                {footerData.copyright}
              </p>
              <br />
              <p
                className="
                text-xs 
                text-muted-foreground 
                relative 
                inline-block
                pl-4
                before:absolute 
                before:left-0 
                before:top-1/2 
                before:-translate-y-1/2 
                before:w-2 
                before:h-2 
                before:bg-cyan-500 
                before:rounded-full
              "
              >
                Crafted with ❤️ using Next.js and Tailwind CSS
              </p>
            </motion.div>
          </div>
        </div>

        {/* Subtle Bottom Gradient */}
        <div
          className="
          absolute 
          bottom-0 
          left-0 
          right-0 
          h-1 
          bg-gradient-to-r 
          from-transparent 
          via-cyan-500/30 
          to-transparent 
          opacity-50
        "
        />
      </footer>
    </TooltipProvider>
  );
}
