import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Button, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { contactSection, author, socialLinks } from '../utils/portfolio';

const Contact = () => {
  const { title, subtitle, paragraphs } = contactSection;

  const contactMethods = [
    {
      icon: 'lucide:mail',
      label: 'Send me an email',
      value: author.email,
      href: `mailto:${author.email}`,
      description: 'Best for detailed discussions',
    },
    {
      icon: 'mdi:calendar-clock',
      label: 'Schedule a Call',
      value: 'Book 30-min meeting',
      href: socialLinks.calendly,
      description: 'Quick chat or interview',
    },
  ];

  const socialMethods = [
    {
      icon: 'tabler:brand-github',
      label: 'GitHub',
      href: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      label: 'LinkedIn',
      href: socialLinks.linkedin,
    },
  ];

  return (
    <Wrapper id="contact" animate={false}>
      <motion.div
        {...getSectionAnimation}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-sm mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-secondary"
          >
            {title}
          </motion.h2>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 max-w-2xl mx-auto"
        >
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Primary Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-accent text-white border border-accent hover:bg-accent/90 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-4">
                <Icon
                  icon={method.icon}
                  className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-200"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.label}
                  </h3>
                  <p className="text-white/90 font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-white/75 text-sm">
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Find me on
          </h3>
          <div className="flex justify-center space-x-6">
            {socialMethods.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                viewport={{ once: true }}
                className="group p-4 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-110"
              >
                <Icon
                  icon={social.icon}
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors duration-200"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Response Time Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          I typically respond within 24 hours
        </motion.p>
      </motion.div>
    </Wrapper>
  );
};

export default Contact;
