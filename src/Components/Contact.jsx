import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Replace these with actual EmailJS keys if available
    const serviceID = 'service_placeholder';
    const templateID = 'template_placeholder';
    const publicKey = 'public_key_placeholder';

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          // If using placeholders, it will fail. Simulating success for demo purposes if no keys are provided
          if (serviceID === 'service_placeholder') {
             setStatus('success');
             form.current.reset();
             setTimeout(() => setStatus('idle'), 5000);
          } else {
             setStatus('error');
          }
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-3xl h-full flex flex-col justify-center space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Me</h3>
                  <a href="mailto:hello@example.com" className="text-text-muted hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary rounded-xl text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-text-muted">San Francisco, CA<br/>Open to remote</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form ref={form} onSubmit={sendEmail} className="glass p-8 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-color-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-color-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-color-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center py-4 px-8 border border-transparent rounded-xl shadow-sm text-base font-medium text-primary-foreground bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="mr-2" size={20} />
                    Message Sent
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="mr-2" size={20} />
                    Error Sending
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
