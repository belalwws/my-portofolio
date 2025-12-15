"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Clock
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "belal.ahmed121sq1@gmail.com",
      href: "mailto:belal.ahmed121sq1@gmail.com",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201128300607",
      href: "tel:+201128300607",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Alexandria, Egypt",
      href: "#",
      color: "from-primary-500 to-primary-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@belalwws",
      href: "https://github.com/belalwws",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Belal Ahmed Mohamed",
      href: "https://www.linkedin.com/in/belal-ahmid",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Globe,
      label: "BakTech Channel",
      username: "Portfolio",
      href: "https://www.youtube.com/@BakTech",
      color: "from-primary-500 to-primary-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 glass rounded-full text-white font-semibold text-sm border border-white/30">
              Let&apos;s Connect
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <motion.div
            className="w-32 h-1.5 bg-primary-gradient mx-auto rounded-full mb-8 shadow-lg shadow-primary-500/50"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Have a project in mind? Let&apos;s chat about
            <span className="text-white font-semibold"> what</span> we can
            <span className="text-white font-semibold"> build</span> together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Intro Text */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s Talk</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I love hearing about new projects! Whether you need a developer for your team, 
                or you have an idea you want to discuss, feel free to reach out. 
                I&apos;m always happy to chat.
              </p>
              
              <div className="flex items-center space-x-2 text-green-400 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="group flex items-center space-x-4 glass rounded-2xl p-4 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <contact.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    className="group flex items-center space-x-4 glass rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{social.label}</p>
                      <p className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <Clock size={20} className="text-white" />
                <h4 className="text-lg font-semibold text-white">Response Time</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Usually reply within 24 hours on weekdays. 
                Need something urgent? Just give me a call!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle size={24} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Send Message</h3>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 bg-green-500/20 text-green-400 p-4 rounded-xl mb-6 border border-green-500/30"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 glass border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all duration-300 hover:border-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 glass border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 glass border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 glass border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all duration-300 resize-none hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
                    placeholder="Tell me about your project ideas, requirements, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="group relative w-full px-8 py-5 bg-primary-gradient text-white font-bold rounded-2xl shadow-lg shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-lg">Sending Message...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={24} />
                      <span className="text-lg">Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={22} className="relative z-10" />
                      <span className="relative z-10 text-lg">Send Message</span>
                      <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </>
                  )}
                </motion.button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. Your information is secure and will not be shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;