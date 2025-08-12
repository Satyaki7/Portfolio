import Myid from "../components/Myid";
import Navbar from "../components/StickyNavbar";
import SquareButtons from "../components/SquareButtons.jsx";
import  github from "../assets/icons8-github-50.png";
import  gmail from "../assets/icons8-gmail-50.png";
import  linkedin from "../assets/icons8-linkedin-50.png";

export default function Landing() {
    return (
        <div className="grid grid-rows-2 md:grid md:[grid-template-rows:80%_20%] h-[calc(100vh-4rem)] text-amber-100">
            <div className="md:grid md:grid-cols-2">
                <div className="w-[90%] h-full flex flex-col justify-center items-center m-4 md:w-full grid-rows-2 gap-8 z-50">
                    <div className="items-start text-left">
                        <p className="text-2xl">Hi, I'm Satyaki Das</p>
                        <p className="text-6xl">
                            <strong>
                                Software
                                <br />
                                Developer
                            </strong>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <SquareButtons imageSrc={github}/>
                        <SquareButtons imageSrc={linkedin}/>
                        <SquareButtons imageSrc={gmail}/>
                    </div>
                </div>

                <div className="flex justify-center items-center h-full w-[90%] m-4 md:w-full">
                    <div className="z-50">
                        <p className="text-xl mt-4">
                            Lorem ipsum dolor sit amet consectetur,<br />
                            adipisicing elit. Ullam<br />
                            laboriosam nemo vero atque omnis<br />
                            eligendi voluptatum cumque hic minima!<br />
                            Ut eveniet ea eos, optio nostrum <br />
                            voluptate perferendis illum mollitia rerum?
                        </p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
