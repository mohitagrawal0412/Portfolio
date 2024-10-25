import React, { useEffect, useRef } from 'react';
import './cursorTrail.css';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const trail = [];
  const trailColor = '0,255,255'; // Cyan color
  const maxTrailLength = 100;
  const maxAge = 1000;

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear only slightly to create fading effect (transparency)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const currentTime = Date.now();

    for (let i = trail.length - 1; i >= 0; i--) {
      const point = trail[i];
      const age = currentTime - point.timestamp;

      if (age > maxAge) {
        trail.splice(i, 1);
        continue;
      }

      const alpha = 1 - age / maxAge;

      ctx.save();
      ctx.beginPath();
      ctx.arc(point.x, point.y, 9, 0, Math.PI * 2);

      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgba(${trailColor}, ${alpha})`;

      ctx.fillStyle = `rgba(${trailColor}, ${alpha})`;
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    // Request next animation frame
    window.requestAnimationFrame(draw);
  };

  const addTrailPoint = (x, y) => {
    trail.push({ x, y, timestamp: Date.now() });

    if (trail.length > maxTrailLength) {
      trail.shift();
    }
  };

  const handleMouseMove = (e) => {
    addTrailPoint(e.clientX, e.clientY);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener('mousemove', handleMouseMove);

    window.requestAnimationFrame(draw);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef}></canvas>
      <div className="introduction" id="introduction">
        <h1 className="text-6xl font">Mohit Agrawal</h1>
        <p className="text-3xl mt-4">A Software Developer!</p>
      </div>
      <div className="profile_image">
        <img src="../../../public/assets/mb1.png" height={250px} className="overlay-image" alt="Overlay" />
      </div>
      <div className="social_icons">
        <FaFacebook className="text-white mt-8" size={30} />
        <FaInstagram className="text-white mt-8" size={30} />
        <FaLinkedinIn className="text-white mt-8" size={30} />
        <FaTwitter className="text-white mt-8" size={30} />
      </div>
    </div>
  );
};

export default CursorTrail;
