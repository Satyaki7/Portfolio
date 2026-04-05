import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const baseBtn =
      "flex items-center justify-center bg-transparent h-[80%] w-[100px] rounded-3xl font-medium transition-colors duration-100 m-2";

  const activeBtn = "!bg-black !text-amber-100 cursor-default";
  const inactiveBtn = "hover:bg-black hover:text-amber-100";

  return (
      <nav
          className="
        fixed bottom-0 left-1/2 -translate-x-1/2 w-[60%] z-100
        md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-auto md:bg-transparent h-fit"
      >
        <div className="flex justify-center items-center h-[3rem] max-w-7xl">
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
                className={`${baseBtn} ${location.pathname === "/Profile-links" ? activeBtn : inactiveBtn}`}
                onClick={() => {
                  window.location.href = "https://satyaki7.github.io/Profile-links/";
                }}
            >
            <span className="md:hidden">
              <span className="material-icons">links</span>
            </span>
              <span className="hidden md:inline">Links</span>
            </button>

          </div>
        </div>
      </nav>
  );
}
