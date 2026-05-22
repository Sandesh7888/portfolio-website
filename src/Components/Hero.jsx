import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, CheckCircle2 } from 'lucide-react';

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

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <span className="bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase border border-color-border">
              Software Engineer
            </span>
            <div className="flex items-center space-x-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium border border-accent/20">
              <CheckCircle2 size={16} />
              <span>Available for New Opportunities</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Full Stack Developer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              & System Architect
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            I architect and build scalable, high-performance web applications. 
            Transforming complex requirements into elegant, robust, and user-centric solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-xl text-primary-foreground bg-primary hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30"
            >
              View Projects
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-xl text-foreground bg-secondary hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-color-border"
            >
              <Mail className="mr-2 -ml-1" size={20} />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-xl text-foreground hover:text-primary transition-colors"
            >
              <Download className="mr-2 -ml-1" size={20} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
