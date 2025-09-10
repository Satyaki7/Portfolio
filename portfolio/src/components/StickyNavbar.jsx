import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const baseBtn =
      "flex items-center justify-center bg-transparent h-[80%] w-[120px] rounded-4xl font-medium transition-colors duration-100";

  const activeBtn = "!bg-black !text-amber-100 cursor-default";
  const inactiveBtn = "hover:bg-black hover:text-amber-100";

  return (
      <nav
          className="
        fixed bottom-0 left-1/2 -translate-x-1/2 w-[60%] z-100
        md:sticky md:top-4 md:left-0 md:translate-x-0 md:w-full md:bg-transparent"
      >
        <div className="flex justify-center items-center md:w-[50%] h-12 max-w-7xl mx-auto">
          <div className="flex justify-around items-center w-[100%] md:space-x-6 h-full bg-[#FFFFFF47] backdrop-blur-2xl text-black rounded-4xl shadow-sm">

            {/* About Me */}
            <button
                className={`${baseBtn} ${location.pathname === "/" ? activeBtn : inactiveBtn}`}
                onClick={() => navigate("/")}
            >
            <span className="md:hidden">
              <span className="material-icons">person</span>
            </span>
              <span className="hidden md:inline">About Me</span>
            </button>

            {/* Projects */}
            <button
                className={`${baseBtn} ${location.pathname === "/projects" ? activeBtn : inactiveBtn}`}
                onClick={() => navigate("/projects")}
            >
            <span className="md:hidden">
              <span className="material-icons">folder</span>
            </span>
              <span className="hidden md:inline">Projects</span>
            </button>

            {/* Resume */}
            <button
                className={`${baseBtn} ${location.pathname === "/resume" ? activeBtn : inactiveBtn}`}
                onClick={() => navigate("/resume")}
            >
            <span className="md:hidden">
              <span className="material-icons">description</span>
            </span>
              <span className="hidden md:inline">Resume</span>
            </button>

            {/* Contact */}
            <button
                className={`${baseBtn} ${location.pathname === "/contact" ? activeBtn : inactiveBtn}`}
                onClick={() => navigate("/contact")}
            >
            <span className="md:hidden">
              <span className="material-icons">send</span>
            </span>
              <span className="hidden md:inline">Contact</span>
            </button>

          </div>
        </div>
      </nav>
  );
}
