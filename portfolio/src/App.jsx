import './App.css'
import Home from "./Pages/landing"
import Navbar from "./components/StickyNavbar.jsx";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.jsx";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
    </>
  )
}

export default App
