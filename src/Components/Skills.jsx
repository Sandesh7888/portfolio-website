import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js / Next.js', level: 95 },
        { name: 'TypeScript / JavaScript', level: 90 },
        { name: 'Tailwind CSS / SCSS', level: 92 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java / Spring Boot', level: 90 },
        { name: 'Node.js / Express.js', level: 88 },
        { name: 'GraphQL / REST APIs', level: 85 },
        { name: 'Microservices', level: 80 },
      ],
    },
    {
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL / MySQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'Elasticsearch', level: 70 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker / Kubernetes', level: 82 },
        { name: 'AWS Services', level: 80 },
        { name: 'CI/CD (GitHub Actions)', level: 85 },
        { name: 'Git / Architecture', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-20 -z-10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
          <p className="text-lg text-text-muted max-w-2xl">
            A comprehensive overview of my technical stack and proficiency levels across different domains of software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (catIndex * 0.1) + (skillIndex * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
