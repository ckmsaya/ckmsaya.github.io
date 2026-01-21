import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Turning complex problems into elegant solutions',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver results',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Full Stack Developer</h3>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a focus on creating exceptional digital experiences.
              With expertise in both frontend and backend technologies, I bring ideas to life through clean code
              and innovative solutions.
            </p>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              My journey in web development has been driven by curiosity and a commitment to continuous learning.
              I enjoy working with modern technologies and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, I'm exploring new frameworks, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Professional Developer</h4>
                <p className="text-gray-400">Crafting digital solutions since 2020</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <highlight.icon className="text-2xl text-white" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
              <p className="text-gray-400">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
