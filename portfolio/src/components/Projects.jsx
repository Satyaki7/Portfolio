import background from "../assets/backgroundOP.jpg"
import projects from "../assets/background.jpeg"

export default function Projects(){
    return(
        <section className={`h-fit w-screen p-4 md:p-0 flex justify-center items-center bg-transparent`}>
            <div className={`h-full w-full md:w-[80%] mt-8 md:mt-32 flex flex-col items-center`}>
                <div className={`h-fit w-full`}>
                    <p className={`text-6xl font-bold font-[Helvetica]`}>Selected Works</p>
                    <p className={`text-2xl font-medium font-[Helvetica]`}>These are some of my projects</p>
                </div>
                <div className={`h-[24rem] w-full bg-cover bg-center bg-fixed rounded-xl mt-24`} style={{backgroundImage: `url(${projects})`}}>
                </div>
                <div className={`w-full h-[8%] bg-transparent mt-4`}>
                    <p className={`text-4xl`}>Project 1</p>
                    <p className={`text-xl mt-2 flex flex-wrap`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non mauris quis leo pulvinar
                        eleifend ut nec felis.
                        Sed vel elit ac risus bibendum ullamcorper vel in lorem.
                        Sed sodales non elit convallis sagittis.
                        Morbi suscipit risus tincidunt, tincidunt ante
                        in, finibus augue.</p>
                </div>
                <div className={`h-fit w-full flex flex-col md:flex-row justify-center md:justify-between items-center mt-16 md:mt-16`}>
                    <div className={`h-[32rem] w-full md:h-full md:w-[45%] flex flex-col justify-center items-center mt-6`}>
                        <div className={` h-[80%] md:h-[24rem] w-full bg-cover bg-center bg-fixed rounded-xl`}
                             style={{backgroundImage: `url(${projects})`}}>
                        </div>
                        <div className={`h-[20%] w-[full]  bg-transparent mt-4`}>
                            <p className={`text-4xl`}>Project 1</p>
                            <p className={`text-xl mt-2 flex flex-wrap`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed non mauris quis leo pulvinar eleifend ut nec felis. Sed vel elit ac risus bibendum ullamcorper vel in lorem.
                                Sed sodales non elit convallis sagittis.
                                Morbi suscipit risus tincidunt, tincidunt ante
                                in, finibus augue.</p>
                        </div>
                    </div>
                    <div className={`h-[32rem] w-full md:h-full md:w-[45%] flex flex-col justify-center items-center mt-6`}>
                        <div className={` h-[80%] md:h-[24rem] w-full bg-cover bg-center bg-fixed rounded-xl`}
                             style={{backgroundImage: `url(${projects})`}}>
                        </div>
                        <div className={`h-[20%] w-[full]  bg-transparent mt-4`}>
                            <p className={`text-4xl`}>Project 1</p>
                            <p className={`text-xl mt-2 flex flex-wrap`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed non mauris quis leo pulvinar eleifend ut nec felis. Sed vel elit ac risus bibendum ullamcorper vel in lorem.
                                Sed sodales non elit convallis sagittis.
                                Morbi suscipit risus tincidunt, tincidunt ante
                                in, finibus augue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}