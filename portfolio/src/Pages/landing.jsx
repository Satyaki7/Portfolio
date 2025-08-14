import Myid from "../components/Myid";
import Navbar from "../components/StickyNavbar";
import SquareButtons from "../components/SquareButtons.jsx";
import  github from "../assets/icons8-github-50.png";
import  gmail from "../assets/icons8-gmail-50.png";
import  linkedin from "../assets/icons8-linkedin-50.png";
import Window from "../components/Window.jsx";

export default function Landing() {
    return (
        <div className="grid grid-rows-2 md:grid md:[grid-template-rows:80%] h-[calc(100vh-4rem)] text-amber-100">
            <div className="md:grid md:grid-cols-2">
                <div className="w-[90%] h-full justify-center items-center m-4 md:w-full grid-rows-2 gap-4 z-50">
                    <div className="flex flex-col justify-center items-center h-full ">
                        <div className="flex flex-col items-start">
                            <div>
                                <p className="text-2xl">Hi, I'm Satyaki Das</p>
                                <p className="text-6xl">
                                    <strong>
                                        Software
                                        <br />
                                        Developer
                                    </strong>
                                </p>
                            </div>
                            <div className="flex flex-row gap-4 mt-4">
                                <SquareButtons imageSrc={github}/>
                                <SquareButtons imageSrc={linkedin}/>
                                <SquareButtons imageSrc={gmail}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center h-fit w-full md:h-full md:w-full rounded-md">
                    <Window/>
                </div>

            </div>
        </div>
    );
}
