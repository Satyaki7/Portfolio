
import Landing from "./Pages/landing"
import Navbar from "./components/StickyNavbar.jsx";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.jsx";
// import About from "./Pages/about.jsx";

function App() {
  return (
    <>
        <SplashCursor/>
        <Navbar/>
        <Landing />

    </>
  )
}

export default App
