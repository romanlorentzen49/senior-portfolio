import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-primary-50 dark:bg-primary-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 h-full">
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail className="text-accent-500 w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h4 className="text-primary-700 dark:text-primary-200 font-medium">Email</h4>
                      <a 
                        href="mailto:contact@example.com" 
                        className="text-primary-600 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                      >
                        romanlorentzen49@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <MapPin className="text-accent-500 w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h4 className="text-primary-700 dark:text-primary-200 font-medium">Location</h4>
                      <p className="text-primary-600 dark:text-primary-300">
                        Pasadena, California
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Phone className="text-accent-500 w-5 h-5 mt-1 mr-4" />
                    <div>
                      <h4 className="text-primary-700 dark:text-primary-200 font-medium">Phone</h4>
                      <a 
                        href="tel:+15551234567" 
                        className="text-primary-600 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                      >
                        +1 (626) 679-0102
                      </a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-10">
                  <h4 className="text-primary-700 dark:text-primary-200 font-medium mb-3">
                    Available For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full text-sm">
                      Part-time Positions
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 rounded-full text-sm">
                      Internships
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="md:col-span-2"
            >
              <div className="bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 h-full">
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-primary-700 dark:text-primary-200 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-700 
                          text-primary-800 dark:text-primary-100 border border-primary-200 dark:border-primary-600 
                          focus:outline-none focus:ring-2 focus:ring-accent-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-primary-700 dark:text-primary-200 font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-700 
                          text-primary-800 dark:text-primary-100 border border-primary-200 dark:border-primary-600 
                          focus:outline-none focus:ring-2 focus:ring-accent-500"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="subject" 
                      className="block text-primary-700 dark:text-primary-200 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-700 
                        text-primary-800 dark:text-primary-100 border border-primary-200 dark:border-primary-600 
                        focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Project Proposal"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-primary-700 dark:text-primary-200 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-700 
                        text-primary-800 dark:text-primary-100 border border-primary-200 dark:border-primary-600 
                        focus:outline-none focus:ring-2 focus:ring-accent-500"
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-accent-500 text-white rounded-lg font-semibold 
                        shadow-md hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 
                        transition-all duration-300 flex items-center ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                    
                    {submitSuccess && (
                      <div className="text-success-500 font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Message sent successfully!
                      </div>
                    )}
                    
                    {submitError && (
                      <div className="text-error-500 font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;