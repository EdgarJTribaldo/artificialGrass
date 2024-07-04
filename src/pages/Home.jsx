import React from 'react';
import Button from '../components/Button';
import Hero from '../components/Hero';
import ServicesGrid from '../components/Servicesgrid';
function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="home">
      <Hero />
      <ServicesGrid></ServicesGrid>

    </div>
  );
}

export default Home;
