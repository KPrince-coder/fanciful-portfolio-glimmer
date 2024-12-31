import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "Data Pipeline Framework",
    description: "Built a scalable ETL pipeline processing 1M+ records daily using Apache Spark and Airflow",
    techStack: ["Python", "Apache Spark", "Airflow", "AWS"],
    github: "#",
    demo: "#",
    category: "Data Engineering"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    category: "Full Stack"
  },
  {
    title: "Fitness Tracker App",
    description: "Android app for tracking workouts and nutrition with ML-powered recommendations",
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "TensorFlow Lite"],
    github: "#",
    demo: "#",
    category: "Android"
  }
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-400">{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-accent text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-secondary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-secondary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;