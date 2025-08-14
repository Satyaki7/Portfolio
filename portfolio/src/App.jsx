
import Landing from "./Pages/landing"
import Navbar from "./components/StickyNavbar.jsx";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.jsx";
import ScrollVelocity from "./blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

function App() {
  return (
    <>
        <SplashCursor/>
        <Navbar/>
        <Landing />
        <div className="w-screen mt-4">
            <ScrollVelocity
                texts={['React Bits', 'Scroll Down']}
                velocity='100'
                className="custom-scroll-text text-amber-100"
            />
        </div>
    </>
  )
}

export default App
