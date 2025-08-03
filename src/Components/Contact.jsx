import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data:', formData);
    alert("Message sent successfully!");
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact" id='contact-call'>
      <div className="section-heading-box">
        <h1 className="section-heading">Contact Me</h1>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
