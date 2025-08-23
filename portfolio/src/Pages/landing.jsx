import Navbar from "../components/StickyNavbar";
import SquareButtons from "../components/SquareButtons.jsx";
import  github from "../assets/icons8-github-50.png";
import  gmail from "../assets/icons8-gmail-50.png";
import  linkedin from "../assets/icons8-linkedin-50.png";
import Window from "../components/Window.jsx";
import myLogo from "../assets/myLogo.png";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

export default function Landing() {
    return (
        <div className="h-screen w-screen bg-white flex flex-col items-center justify-center font-black md:p-32 p-8">
            <div className="flex md:flex-row flex-col md:justify-between items-center w-full">
                <div className="flex flex-col">
                    <p className="md:text-5xl font-[Helvetica] font-light text-2xl">Hi I'm</p>
                    <p className="md:text-8xl font-['Birthstone'] font-medium text-6xl">Satyaki<br/>Das</p>
                </div>
                <div>
                    <div className="md:h-[32rem] md:w-[24rem] rounded-full w-[6rem] h-[8rem] mt-5 md:mt-0">
                        <img src={myLogo} alt="myid" className="h-full w-full rounded-full" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-8 justify-between items-center w-full">
                <div className="font-medium">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris quis leo pulvinar <br/>eleifend ut nec felis. Sed vel elit ac risus bibendum ullamcorper vel in lorem. Sed <br/>sodales non elit convallis sagittis. Morbi suscipit risus tincidunt, tincidunt ante <br/>in, finibus augue. In condimentum nisi in rhoncus posuere.
                    </p>
                </div>
                <div className="font-medium">
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/> Sed non mauris quis leo pulvinar eleifend ut nec felis. <br/> Sed vel elit ac risus bibendum ullamcorper <br/> vel in lorem. Sed sodales non elit convallis sagitt. </p>
                </div>
            </div>
            <div className="w-screen">
                <p className="text-4xl sm:text-6xl lg:text-8xl font-bold whitespace-normal lg:whitespace-nowrap" >Developer Developer Developer Developer Developer Developer Developer Developer </p>
            </div>
        </div>
    );
}
