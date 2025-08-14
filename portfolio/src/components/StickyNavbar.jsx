export default function Navbar() {
  return (
      <nav
          className="
        fixed bottom-0 left-1/2 -translate-x-1/2 w-[80%] z-100
        md:sticky md:top-4 md:left-0 md:translate-x-0 md:w-full md:bg-transparent rounded-4xl
      "
      >
        <div className="flex justify-around md:justify-center items-center h-16 max-w-7xl mx-auto">
          <div className="flex justify-around w-[100%] md:space-x-6 md:w-[80%] md:h-full bg-transparent backdrop-blur-2xl md:backdrop-blur-2xl text-amber-100 rounded-4xl p-2">
            <a href="#home" className="flex flex-col items-center hover:text-indigo-400 md:flex-row md:space-x-1">
              <span className="material-icons ">home</span>
              <span className="text-sm md:text-base">Home</span>
            </a>
            <a href="#projects" className="flex flex-col items-center hover:text-indigo-400 md:flex-row md:space-x-1">
              <span className="material-icons">folder</span>
              <span className="text-sm md:text-base">Projects</span>
            </a>
            <a href="#resume" className="flex flex-col items-center hover:text-indigo-400 md:flex-row md:space-x-1">
              <span className="material-icons">description</span>
              <span className="text-sm md:text-base">Resume</span>
            </a>
            <a href="#links" className="flex flex-col items-center hover:text-indigo-400 md:flex-row md:space-x-1">
              <span className="material-icons">link</span>
              <span className="text-sm md:text-base">Links</span>
            </a>
            <a href="#contact" className="flex flex-col items-center hover:text-indigo-400 md:flex-row md:space-x-1">
              <span className="material-icons">send</span>
              <span className="text-sm md:text-base">Contact</span>
            </a>
          </div>
        </div>
      </nav>
  );
}
