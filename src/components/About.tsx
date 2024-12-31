import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate developer with expertise in Data Engineering, Full Stack Development, and Android Development. 
                With a strong foundation in both backend and frontend technologies, I love creating efficient, scalable solutions 
                that make a real impact.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech has led me to work with various technologies and frameworks, 
                allowing me to develop a comprehensive understanding of the software development lifecycle. 
                I'm particularly excited about data engineering and mobile development with Jetpack Compose.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              "Data Engineering",
              "Full Stack Dev",
              "Android (Jetpack)",
              "Cloud Computing",
              "Database Design",
              "API Development",
              "UI/UX Design",
              "DevOps"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="glass-card p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;