import React, { useEffect, useRef } from 'react';
import './cursorTrail.css'; // Import your CSS file for styling

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const trail = [];
  const trailColor = "0,255,255"; // RGB for cyan color
  const maxTrailLength = 100; // Maximum number of points in trail
  const maxAge = 1000; // Time in milliseconds before trail point fades out

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const currentTime = Date.now();

    // Draw each point in the trail
    for (let i = trail.length - 1; i >= 0; i--) {
      const point = trail[i];
      const age = currentTime - point.timestamp;

      if (age > maxAge) {
        // Remove point if it has fully faded out
        trail.splice(i, 1);
        continue;
      }

      // Calculate the alpha based on the age of the point
      const alpha = 1 - age / maxAge;

      ctx.save();
      ctx.beginPath();
      ctx.arc(point.x, point.y, 9, 0, Math.PI * 2);

      // Apply glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgba(${trailColor}, ${alpha})`;

      // Set fill color with calculated alpha
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

    // Keep trail within the maximum length
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

    // Add mouse move event listener
    canvas.addEventListener("mousemove", handleMouseMove);

    // Start the animation loop
    window.requestAnimationFrame(draw);

    // Cleanup event listener on component unmount
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef}></canvas>
      {/* <div className="introduction" id="introduction">
        <h1>Welcome to Our Website</h1>
        <p>This is an introduction section. Move your cursor here to see the animation!</p>
      </div> */}
      <div className="profile_image">
        <img src="../../../public/assets/mb1.png" height={} className="overlay-image" alt="Overlay" />
      </div>

    </div>
  );
};

export default CursorTrail;
