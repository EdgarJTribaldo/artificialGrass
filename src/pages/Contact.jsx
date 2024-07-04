import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function Contact() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="contact">
      <Header />
      <main>
        <p>This is the Contact page of our React application.</p>
        <Button text="Click Me" onClick={handleClick} />
      </main>
    </div>
  );
}

export default Contact;
