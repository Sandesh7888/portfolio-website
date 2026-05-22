import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Volunteer Management System',
      description: 'A comprehensive system to manage volunteer applications, track hours, and streamline the onboarding process.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      github: '#',
      live: 'https://volunteer-application-psi.vercel.app/',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment gateway integration, and an admin dashboard.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management System',
      description: 'A scalable SaaS application for team collaboration featuring Kanban boards, real-time updates via WebSockets, and role-based access.',
      tech: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Redis'],
      github: '#',
      live: '#',
    },
    {
      title: 'Car Rental Service',
      description: 'A high-performance booking system with geolocation, dynamic pricing algorithms, and a native-like mobile responsive experience.',
      tech: ['React Native', 'Java', 'Spring Boot', 'MySQL', 'AWS S3'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Dashboard',
      description: 'An advanced analytics dashboard for tracking personal investments and cryptocurrency portfolios with real-time data visualization.',
      tech: ['Vue.js', 'Tailwind', 'Python', 'FastAPI', 'Chart.js'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
          <p className="text-lg text-text-muted max-w-2xl">
            A selection of complex applications I have built, showcasing my ability to architect full-stack solutions and solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass p-8 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-primary/30"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-secondary rounded-xl text-primary">
                    <Folder size={32} />
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-text-muted hover:text-primary transition-colors" aria-label="GitHub Repository">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.live} className="text-text-muted hover:text-primary transition-colors" aria-label="Live Demo">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-color-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
