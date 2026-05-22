import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Layout, Database } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: <Code2 size={24} className="text-primary" />,
      title: 'Software Engineering',
      description: 'Writing clean, maintainable code following SOLID principles and modern design patterns.',
    },
    {
      icon: <Server size={24} className="text-accent" />,
      title: 'System Architecture',
      description: 'Designing scalable microservices and distributed systems that handle high traffic.',
    },
    {
      icon: <Layout size={24} className="text-blue-500" />,
      title: 'UI/UX Craftsmanship',
      description: 'Translating designs into pixel-perfect, accessible, and highly interactive interfaces.',
    },
    {
      icon: <Database size={24} className="text-purple-500" />,
      title: 'Database Optimization',
      description: 'Architecting efficient schemas and complex queries for SQL and NoSQL databases.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            I am a senior full-stack engineer with a passion for solving complex problems. 
            Over the past decade, I have led teams, architected robust systems, and delivered 
            products that impact millions of users. My approach combines deep technical knowledge 
            with a strong focus on user experience and business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
