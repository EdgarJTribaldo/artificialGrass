import React from 'react';
import '../styles/ServicesGrid.css';

const ServicesGrid = () => {
  return (
    <section className="services-grid">
        <h2>Enhance Your Golfing Experience with Our Artificial Turf Services</h2>
      <div className="service">
        <h3>Installation</h3>
        <p>High-quality installation services for your home and golf course.</p>
      </div>
      <div className="service">
        <h3>Maintenance</h3>
        <p>Reliable maintenance services to keep your property in top shape.</p>
      </div>
      <div className="service">
        <h3>Consultation</h3>
        <p>Expert consultation to help you choose the best solutions.</p>
      </div>
      <div className="service">
        <h3>Custom Solutions</h3>
        <p>Customized solutions tailored to your specific needs and preferences.</p>
      </div>
      <div className="service">
        <h3>Landscaping</h3>
        <p>Enhance your outdoor space with our landscaping services.</p>
      </div>
      <div className="service">
        <h3>Repair</h3>
        <p>Quick and efficient repair services to fix any issues.</p>
      </div>
    </section>
  );
}

export default ServicesGrid;
