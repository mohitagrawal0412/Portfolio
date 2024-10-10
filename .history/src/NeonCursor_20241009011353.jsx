import React, { useState, useEffect } from "react";


const NeonCursor = () => {

  const [cursorX, setCursorX] = useState(0);

  const [cursorY, setCursorY] = useState(0);

  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#00ff00", "#ff0000", "#0000ff"];


  useEffect(() => {

    const handleMouseMove = (e) => {

      setCursorX(e.clientX);

      setCursorY(e.clientY);

    };


    document .addEventListener("mousemove", handleMouseMove);


    return () => {

      document.removeEventListener("mousemove", handleMouseMove);

    };

  }, []);


  return (

    <div

      className="neon-line"

      style={{

        left: `${cursorX}px`,

        top: `${cursorY}px`,

        backgroundColor: colors[colorIndex],

      }}

    ></div>

  );

};


export default NeonCursor;