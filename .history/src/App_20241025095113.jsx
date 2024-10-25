
import { Navbar } from 'react-bootstrap';
import CursorTrail from './components/Introduction/CursorTrail';
import NavbarSimple from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import Skill from './components/Skills/skill';
import Project from './components/Project/Project.jsx';
import './App.css'
import './index.css';

function App() {
  return (
    <>
      <NavbarSimple />
      <CursorTrail />
      <Education />
      <Skill />
      <Project />

    </>
  );

}


export default App;