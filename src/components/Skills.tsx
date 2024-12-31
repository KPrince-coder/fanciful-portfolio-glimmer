import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Apache Spark", "Airflow", "Kafka", "SQL", "Python", "AWS", "Hadoop"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "REST APIs"],
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Android Development",
    icon: Smartphone,
    skills: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines", "Material Design", "Firebase"],
    color: "from-orange-500/20 to-red-500/20"
  }
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-accent/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              className={`p-6 rounded-lg bg-gradient-to-br ${category.color} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-card rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;