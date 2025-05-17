// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen text-white font-sans"
      style={{
        backgroundImage: "url('/728d89e3-2a1e-414f-b67b-ec296462a5c9.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm p-8 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-dancing mb-4">Hi, my name is</h1>
          <h2 className="text-4xl md:text-5xl font-bold">Swetha Tanguturu</h2>
          <p className="text-lg mt-4 tracking-widest uppercase">Full-Stack Developer | React.js | Node.js | UI/UX</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
