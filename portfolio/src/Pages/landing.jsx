import Navbar from "../components/StickyNavbar";
import SquareButtons from "../components/SquareButtons.jsx";
import  github from "../assets/icons8-github-50.png";
import  gmail from "../assets/icons8-gmail-50.png";
import  linkedin from "../assets/icons8-linkedin-50.png";
import Window from "../components/Window.jsx";
import myLogo from "../assets/myLogo.png";
import Skill from "../components/Skill.jsx";
import ScrollTexts from "../components/ScrollText.jsx";
import background from "../assets/goldenratio.png";
import Projects from "../components/Projects.jsx";

export default function Home() {
    return (
        <>
            <section
                className="h-screen w-screen bg-transparent flex flex-col items-center justify-center font-black md:mt-0 mt-6 " >
                <div className="w-[80%] h-full flex flex-col justify-center items-center">
                    <div className="flex md:flex-row flex-col md:justify-between items-center w-full">
                        <div className="flex flex-col">
                            <p className="md:text-5xl font-[Helvetica] font-light text-2xl">Hi I'm</p>
                            <p className="md:text-[8rem] font-['Birthstone'] font-medium text-6xl">Satyaki<br/>Das</p>
                        </div>
                        <div>
                            <div className="md:h-[32rem] md:w-[32rem] rounded-full w-[6rem] h-[8rem] mt-5 md:mt-0">
                                <img src={myLogo} alt="myid" className="h-full w-full rounded-full object-contain"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="font-medium">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Sed non mauris quis leo
                                pulvinar <br/>eleifend ut nec felis.<br/> Sed vel elit ac risus bibendum ullamcorper vel in
                                lorem.<br/> Sed sodales non elit convallis sagittis. <br/>Morbi suscipit risus tincidunt,
                                tincidunt ante <br/>in, finibus augue. <br/>In condimentum nisi in rhoncus posuere.
                            </p>
                        </div>
                        <div className="text-sm font-medium">
                            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/> Sed non mauris quis leo
                                pulvinar eleifend ut nec felis. <br/> Sed vel elit ac risus bibendum ullamcorper <br/> vel
                                in lorem. Sed sodales non elit convallis sagitt. </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <ScrollTexts text={"Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer"} start={200} end={-600}/>
            </section>
            <Skill/>
            <Projects/>

        </>
    );
}
