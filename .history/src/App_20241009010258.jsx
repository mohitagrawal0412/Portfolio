import NavbarSimple from './components/navbar'; // Correct import for NavbarSimple
import './App.css';
import NeonCursor from './NeonCursor.js';
function App() {
  return (
    <>

      <NavbarSimple /> {/* Render NavbarSimple directly */}
      <NeonCursor />
    </>
  );
}

export default App;
