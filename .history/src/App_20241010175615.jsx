
import { Navbar } from 'react-bootstrap';
import CursorTrail from './components/Introduction/CursorTrail';
import NavbarSimple from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import Skill from './components/Skills/skill';
import './App.css';
// src/main.jsx or src/App.jsx
import './App.css'; // Ensure the correct path

function App() {
  return (
    <>
      <NavbarSimple />
      <CursorTrail />
      <Education />
      <Skill />

    </>
  );

}


export default App;