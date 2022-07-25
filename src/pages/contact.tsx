import React from 'react';

import ContactForm from '../components/Contact';
import Hero from '../components/Hero';

const Contact = () => {
  return (
    <div>
      <Hero
        heading='Contact'
        message='Submit the form below for more work and quotes.'
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
