import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase border border-color-border">
              Software Engineer
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Full Stack Developer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              & System Architect
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            I architect and build scalable, high-performance web applications. 
            Transforming complex requirements into elegant, robust, and user-centric solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30"
            >
              View Projects
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg text-foreground bg-secondary hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-color-border"
            >
              <Mail className="mr-2 -ml-1" size={20} />
              Contact Me
            </a>
            <a
              href="/resume.pdf" // Placeholder link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg text-foreground hover:text-primary transition-colors"
            >
              <Download className="mr-2 -ml-1" size={20} />
              Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-md lg:max-w-full lg:mx-0"
        >
          <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden glass shadow-2xl relative group">
            {/* Developer workspace image */}
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
              alt="Developer Workspace"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass p-4 rounded-xl backdrop-blur-md">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary">✓</div>
                  <div className="text-sm text-text-muted">Available for <br/>New Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
