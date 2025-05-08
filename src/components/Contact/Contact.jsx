import React, { useState } from 'react';
import styles from './Contact.module.css'; // Ensure correct path for CSS
import emailjs from 'emailjs-com';  // Ensure to import emailjs

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);  // To track form submission
  const [showPopup, setShowPopup] = useState(false); // For managing popup visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Using EmailJS to send the form data to your email
    emailjs.send(
        'service_iok8xjh',  // EmailJS service ID (replace with your actual service ID)
        'template_e7poz7u',  // EmailJS template ID (replace with your actual template ID)
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        'znyGuQNDcEWv-7BsA'      // EmailJS user ID (replace with your actual user ID)
      )
      .then(
        (response) => {
          setIsSubmitted(true);
          setShowPopup(true); // Show success popup
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });

          // Hide the popup after 3 seconds
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          console.error(error);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out if you have any questions or want to collaborate. You can reach me via email or social media.
          </p>
          <div className={styles.socialLinks}>
            <a href="mailto:vinay.dhorajiya19@gmail.com" className={styles.link}>
              <img src="./assets/contact/emailIcon.png" alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-dhorajiya-2652501b5/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <img src="./assets/contact/linkedinIcon.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/vinaydhorajiya01"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <img src="./assets/contact/githubIcon.png" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.nameInputs}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success popup */}
      {showPopup && (
        <div className={styles.popup}>
          <p>Your request has been sent successfully!</p>
        </div>
      )}
    </section>
  );
};
