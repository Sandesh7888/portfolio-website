import {  github, instagram, linkedin,photo, } from "../assets";

export const navLinks = [
  { id: 'home-call', title: 'Home' },
  { id: 'about-call', title: 'About' },
  { id: 'resume-call', title: 'Resume' },
  { id: 'skills-call', title: 'Skills' },
  { id: 'projects-call', title: 'Projects' },
  { id: 'contact-call', title: 'Contact' },
 
  

];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/sandesh__7888/",
  },
  {
    id: "social-media-2",
    icon: github,
    link: "https://github.com/Sandesh7888",
  },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://www.twitter.com/",
  // },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sandesh-karad-aa684528a/",
  },
];

export const skillsDetails = [
          { name: "HTML", level: 80 },
          { name: "CSS", level: 70 },
          { name: "JavaScript", level: 60 },
          { name: "Java", level: 60 },
          { name: "React.js", level: 60 },
          { name: "SQL", level: 80 },
        ]

export const aboutMe = {
  name: "Sandesh Karad",
  dateOfBirth: "May 5, 2002",
  address: "Pune, Maharashtra",
  email: "sandeshkarad7472@gmail.com",
  phone: "7218700907",
  profilePhoto: photo, 
  description: `I am a software developer with a passion for creating innovative and user-friendly applications. 
I have a strong background in computer science and a keen eye for detail. I am always looking for new challenges 
and opportunities to learn and grow as a developer. I have worked with a variety of technologies, including 
React, Express.js, Node.js, MySQL, JavaScript, and MongoDB. My journey in web development began with a deep 
curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt 
to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver 
high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`
};

export const education = [
  {
    year: "2021 - 2025",
    degree: "BE Computer Engineering",
    branch: "Computer Engineering",
    institution: "Vishwabharati Academy's College Of Engineering , A.nagar",
    description: `Situated in Ahmednagar, Vishwabharati Academy's College Of Engineering is a well-regarded institution dedicated to fostering technical excellence and innovation. The college offers a wide array of engineering programs, supported by experienced faculty and modern infrastructure. With a focus on practical learning, research, and holistic development, the campus provides an enriching environment where students are empowered to become future-ready professionals and responsible innovators.`,
   result: "6.81 CGPA"
  },
  {
    year: "2018 - 2020",
    degree: "Higher Secondary School",
    branch: "Science",
    institution: "N.M.V College Markal, Pune",
   description: `N.M.V College Markal, Pune is a reputed high school located in the vibrant region of Pune. With a strong legacy of academic excellence, the institution is recognized for its experienced faculty, student-centered approach, and commitment to holistic education. The college offers a range of co-curricular opportunities and modern learning resources, fostering intellectual growth and personal development. N.M.V College is dedicated to inspiring young minds and preparing them to thrive in a dynamic world.`,
   result: "61.23%"
  }
];

export const experiences = [
  {
    year: "2024",
    title: "Intern ",
    organization: "A2Z IT HUB ,A.nagar",
    description:"Contributed as an intern at A2Z IT HUB, A.nagar, assisting in the development of dynamic web applications using HTML, CSS, and JavaScript. Gained hands-on experience with front-end development and responsive design practices. Worked closely with the development team to troubleshoot issues and implement user-centric features aligned with project goals.",
    skills: ["HTML", "CSS", "JavaScript"],

    type: "experience",
  }
];

export const certifications = [
  {
    year: "2024",
    title: "Java Data Structure and Algorithm Masterclass",
    platform: "Infosys Springboard",
    description:
      "Completed a course on Data Structures and Algorithms using Java, focusing on writing efficient, optimized code. Learned to implement core data structures like arrays, linked lists, stacks, queues, trees, and graphs. Gained hands-on experience in algorithm design, recursion, sorting, searching, and time complexity analysis. Strengthened logical thinking and time management through structured problem-solving approaches.",
    skills: ["Java", "Data Structures"],
    type: "certificate",
    
    
  },
  {
    year: "2024",
    title: "HTML, JavaScript, & Bootstrap Course",
    platform: "Infosys Springboard",
    description: "Completed a comprehensive course on web development through Infosys Springboard. Gained hands-on experience with both front-end and back-end technologies, explored server-side development, and applied common design patterns to build responsive, user-friendly web applications.",
     skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    type: "certificate",
  },
  {
    year: "2025",
    title: "Java Foundation Completion Certificate",
    platform: "Infosys Springboard",
    description:"Completed the Java Foundation Certification through Infosys Springboard. Gained a strong understanding of core Java concepts including object-oriented programming, exception handling, collections, and basic file operations. Developed foundational skills essential for backend development and enterprise-level applications.",
    skills: ["Core Java", "OOPs", "Exception Handling", "Collections"],
    type: "certificate",
    

  }
];

export const projects = [
  {
    title: "Text-to-SQL Conversion using Machine Learning",
    description:
      "Built an ML-powered system that converts natural language queries into SQL statements. Trained models to understand query intent, and integrated with SQL execution for real-time results. Useful for non-technical users to interact with databases intuitively.",
    techStack: ["Python", "NLP", "Scikit-learn", "Pandas", "SQL"],
    liveLink: "", 
    githubLink: "https://github.com/your-username/text-to-sql"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern portfolio website to showcase my projects, skills, and certifications. Built using React.js with responsive design and animations for a smooth user experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    liveLink: "https://your-portfolio-link.com",
    githubLink: "https://github.com/your-username/portfolio-website"
  },
  {
    title: "Bakery Shop Website",
    description:
      "Created an e-commerce style website for a local bakery with product listings, cart functionality, and contact section. Ensured mobile responsiveness and user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    liveLink: "https://your-bakery-site.com",
    githubLink: "https://github.com/Sandesh7888/Yogiraj-Cake-Shop"
  },
  {
    title: "Hospital Management System",
    description:
      "Developed a hospital management system to manage patient records, appointments, billing, and doctor schedules. Implemented authentication and role-based dashboards for admin, doctor, and patient.",
    techStack: ["Java", "JSP", "MySQL", "Servlets", "Bootstrap"],
    liveLink: "", 
    githubLink: "https://github.com/your-username/hospital-management"
  },
  {
    title: "Construction Company Website",
    description:
      "Built an informational website for a construction firm showcasing their services, projects, and client testimonials. Integrated contact form and map functionality.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://your-construction-site.com",
    githubLink: "https://github.com/Sandesh7888/project_construction-clone"
  }
];

