import { useState } from "react";
import {Console} from "./Console.jsx";
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";

export default function Window() {
    const [isVisible, setIsVisible] = useState(true);
    const [size, setSize] = useState("md:h-[60%] md:w-[60%]");
    const [maximised, setMaximized] = useState(false);
    function handleResize() {
        if(maximised === true){
            setSize("md:h-[60%] md:w-[60%]")
            setMaximized(false)
        }else{
            setSize("md:h-[90%] md:w-[90%]")
            setMaximized(true)
        }
    }
    if (!isVisible) return null;

    return (
        <div className={`gird grid-rows-[5%_95%] z-10 md:z-50 bg-[#FFFFFF0F] backdrop-blur-2xl rounded-md ${size} m-2 md:transition-all duration-300`}>
            <div className="flex flex-row justify-left items-center gap-2 bg-white rounded-t-md p-1">
                {/* Close */}
                <button
                    className="w-4 h-4 bg-[#FF605C] rounded-full flex items-center justify-center text-transparent text-xs hover:text-white"
                    onClick={() => setIsVisible(false)}
                >
                    <span className="material-symbols-outlined">close_small</span>
                </button>

                {/* Minimize */}
                <button
                    className="w-4 h-4 bg-[#FFBD44] rounded-full flex items-center justify-center text-transparent text-xs hover:text-white"
                    onClick={() => setSize("md:h-[30%] md:w-[30%]")}
                >
                    <span className="material-symbols-outlined">collapse_content</span>
                </button>

                {/* Enlarge */}
                <button
                    className="w-4 h-4 bg-[#00CA4E] rounded-full flex items-center justify-center text-transparent text-xs hover:text-white"
                    onClick={handleResize}
                >
                    <span className="material-symbols-outlined">expand_content</span>
                </button>

                <label className="absolute left-1/2 -translate-x-1/2 text-black">About Me</label>
            </div>
            <div className="justify-center items-center p-4 bg-transparent w-screen h-full md:w-full md:h-full">
                <TextType
                    text={"A 1st year CSE undergrad at No Idea College of Technologia who loves developing stuff and finding solutions to problems around him"}
                    typingSpeed={25}
                    cursorBlinkDuration={0.2}
                    showCursor={true}
                    cursorCharacter="█"
                    loop={false}
                />
            </div>
        </div>
    );
}
