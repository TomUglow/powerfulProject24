import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../stylesheets/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ge8bhah',
      'template_714s7ee',
      formData,
      'user_kOD2awCiUQTvoAfY4hMUn'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        navigate('/thank-you'); // Redirect to Thank You page
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
    };

  return (
    <div className="contact-us">
      <h2>CONTACT US</h2>
      <h1>Got a question for us?</h1>
      <h3>Fill in the below details and we will get back to you as soon as possible!</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Message:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="contact-us-button">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
