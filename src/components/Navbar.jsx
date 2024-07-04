import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/navBar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ type: 'none', stiffness: 0   }}
    >
      <div className="navbar-logo">
        <h2
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          ARTIFICIAL GRASS
        </h2>
      </div>
      <div className="navbar-links">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link to="/">Home</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link to="/services">Services</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Link to="/testimonials">Testimonials</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
