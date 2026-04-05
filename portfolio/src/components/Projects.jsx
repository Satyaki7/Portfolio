import background from "../assets/backgroundOP.jpg"
import projects from "../assets/background.jpeg"
import game1 from "../assets/game1.jpeg"
import flightfix from "../assets/flightfix.png"
import TiltCard from "./TiltCard"
import japan from "../assets/backgroundOP1.jpg"

export default function Projects(){
    return(
        <section className={`h-fit w-screen p-4 md:p-0 flex justify-center items-center bg-transparent`}>
            <div className={`h-full w-full md:w-[80%] mt-8 md:mt-4 flex flex-col items-center`}>
                <div className={`h-fit w-full`}>
                    <p className={`text-[8rem] font-bold font-['Helvetica'] text-center`}>Selected Works</p>
                </div>
                <div className={`h-[24rem] w-full bg-cover bg-center bg-fixed rounded-xl mt-8`} style={{backgroundImage: `url(${game1})`}}>
                </div>
                <div className={`w-full h-[8%] bg-transparent mt-8`}>
                    <p className={`text-4xl font-['Sekuya'] font-bold`}>Game 1</p>
                    <p className={`text-2xl font-[monospace] mt-2 flex flex-wrap`}>This is my first ever game. I created this recently trying to learn how games work using the GoDot engine and GDScript. I was a fun learning experience.</p>
                </div>
                <div className="w-full flex flex:col md:flex-row gap-8 mt-16">
                    <div className={`h-fit w-full flex justify-center items-center`}>
                        <TiltCard 
                            backgroundImage={flightfix}
                            title="Flight Fix"
                            description="A small CURD app created using python library known as Tkinter."
                        />
                    </div>
                    <div className={`h-fit w-full flex justify-center items-center`}>
                        <TiltCard 
                            backgroundImage={projects}
                            title="MoneyPro"
                            description="A web based expense tracker created to keep track of your expenses."
                        />
                    </div>
                </div>
                <div className={`h-[24rem] w-full bg-cover bg-center bg-fixed rounded-xl mt-24`} style={{backgroundImage: `url(${japan})`}}>
                </div>
                <div className={`w-full h-[8%] bg-transparent mt-8 mb-16`}>
                    <p className={`text-4xl font-['Sekuya'] font-bold`}>Coming Soon...</p>
                    <p className={`text-2xl mt-2 flex flex-wrap font-[monospace]`}>Spoiler: It's an app</p>
                </div>
            </div>
        </section>
    )
}