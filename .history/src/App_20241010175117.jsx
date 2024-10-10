
import { Navbar } from 'react-bootstrap';
import CursorTrail from './components/Introduction/CursorTrail';
import NavbarSimple from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import Skill from './components/Skills/skill';
import './App.css';
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