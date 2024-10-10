import React, { useEffect, useRef, useState } from "react";

const NeonCursor = () => {
  const canvasRef = useRef(null);
  const [trailLength, setTrailLength] = useState(20);
  const [trailColor, setTrailColor] = useState("0,255,255"); //RGB values for cyan color
  const [trail, setTrail] = useState([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < trail.length; i++) {
        const alpha = 1;
        ctx.save();
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, 10, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${trailColor},${alpha})`;
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      window.requestAnimationFrame(draw);
    }

    function addTrailPoint(x, y) {
      setTrail([...trail, { x, y }]);
      if (trail.length > trailLength) {
        setTrail(trail.slice(1));
      }
    }

    const startDrawing = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      addTrailPoint(newX, newY);
      setMouseX(newX);
      setMouseY(newY);
    };

    canvas.addEventListener("mousemove", startDrawing);

    window.requestAnimationFrame(draw);

    return () => {
      canvas.removeEventListener("mousemove", startDrawing);
    };
  }, [trailColor, trailLength, trail]);

  return (