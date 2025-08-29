import background from "../assets/background.jpeg"
import GithubContributions from "./GithubContributions.jsx";

export default function Projects(){
    return(
        <section className={`h-[350vh] w-screen flex flex-col justify-center items-center p-4 md:p-0`}>
            <div className={`h-full w-full md:w-[80%] mt-8 md:mt-32 flex flex-col items-center`}>
                <div className={`h-[12%] w-full bg-cover bg-center bg-fixed rounded-xl`} style={{backgroundImage: `url(${background})`}}>
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
                <div className={`h-[32%] md:h-[16%] w-full flex flex-col md:flex-row justify-center md:justify-between items-center`}>
                    <div className={`md:h-full w-[45%] mt-4 md:mt-0`}>
                        <div className={` h-[45%] md:h-full w-full bg-cover bg-center bg-fixed rounded-xl`}
                             style={{backgroundImage: `url(${background})`}}>
                        </div>
                        <div className={`h-full w-[full]  bg-transparent mt-4`}>
                            <p className={`text-4xl`}>Project 1</p>
                            <p className={`text-xl mt-2 flex flex-wrap`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed non mauris quis leo pulvinar eleifend ut nec felis. Sed vel elit ac risus bibendum ullamcorper vel in lorem.
                                Sed sodales non elit convallis sagittis.
                                Morbi suscipit risus tincidunt, tincidunt ante
                                in, finibus augue.</p>
                        </div>
                    </div><div className={`md:h-full w-[45%] mt-4 md:mt-0`}>
                        <div className={` h-[45%] md:h-full w-full bg-cover bg-center bg-fixed rounded-xl`}
                             style={{backgroundImage: `url(${background})`}}>
                        </div>
                        <div className={`h-full w-[full]  bg-transparent mt-4`}>
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