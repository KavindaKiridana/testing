import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Phone, Download, Send, ExternalLink, Code2, Database, Terminal } from 'lucide-react';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
              alt="Kavinda Kiridana"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-lg"
            />
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Kavinda Kiridana
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-2xl text-gray-300 mb-6">
            SE Undergraduate | Backend Developer
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building Scalable & Efficient Backend Systems
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
            <a
              href="/cv.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my BSc in Software Engineering at the University of Plymouth, UK,
                I bring hands-on experience from my internship at Sri Lanka Telecom PLC where I worked
                on developing and maintaining enterprise applications using ASP.NET MVC.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is to secure a Trainee Backend Developer role where I can leverage my strong
                foundation in software engineering and expertise in backend technologies to build
                scalable solutions.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Code2 className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Backend Dev</h3>
                <p className="text-gray-400">Specialized in ASP.NET MVC and Node.js</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Database className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Database</h3>
                <p className="text-gray-400">SQL Server, MySQL, MongoDB</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Terminal className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                <p className="text-gray-400">Git, Docker, Azure DevOps</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Code2 className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400">React.js, Bootstrap</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Core Expertise", skills: ["C#", "ASP.NET MVC", ".NET", "PHP", "JavaScript"] },
              { category: "Frameworks", skills: ["ASP.NET", "Laravel", "Node.js", "Express.js", "React.js"] },
              { category: "Databases", skills: ["Microsoft SQL Server", "MySQL", "MongoDB", "Firebase"] },
              { category: "Tools & IDEs", skills: ["Visual Studio", "VS Code", "Docker", "Postman", "Git"] },
              { category: "UI/UX", skills: ["Figma", "Canva", "Bootstrap", "WordPress"] },
              { category: "Other", skills: ["REST APIs", "Unit Testing", "Azure DevOps", "Agile"] }
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-700/30 rounded-lg p-6 hover:bg-gray-700/50 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SLT Call Tagging Application",
                description: "A call tagging web system using ASP.NET Core MVC to help agents log, track, and analyze customer service interactions.",
                tech: ["ASP.NET MVC", "MySQL", "Bootstrap"],
                link: "https://github.com/KavindaKiridana/5_Customer-care-center-application"
              },
              {
                title: "Library Management System",
                description: "A MERN stack library system enabling book management, user control, and lending operations for efficient library administration.",
                tech: ["Node.js", "Express.js", "MongoDB", "React.js"],
                link: "https://github.com/ChandeepaKumarasinghe/fullstack1"
              },
              {
                title: "Smart Car Parking System",
                description: "An IoT-based smart parking system using ESP8266 and Firebase that detects car presence via ultrasonic sensors.",
                tech: ["C++", "JavaScript", "Arduino", "Firebase"],
                link: "https://github.com/KavindaKiridana/3_Smart-Green-House"
              },
              {
                title: "SLT Gate-pass Application",
                description: "A secure ASP.NET MVC system for SLT that manages and tracks gate passes, controlling asset movement through verification workflows.",
                tech: ["ASP.NET MVC", "SQL Server", "Bootstrap"],
                link: "https://github.com/KavindaKiridana/9_Gate-pass-Application"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-700/30 rounded-lg overflow-hidden hover:bg-gray-700/50 transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-200">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:kavindakiridena@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300">
                  <Mail className="w-6 h-6" />
                  <span>kavindakiridena@gmail.com</span>
                </a>
                <a href="tel:+94771923861" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300">
                  <Phone className="w-6 h-6" />
                  <span>+94 771923861</span>
                </a>
                <a href="https://github.com/KavindaKiridana" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300">
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kavinda-kiridana-8a330521a/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition duration-300">
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
            <motion.form variants={fadeInUp} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 Kavinda Kiridana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;