import { useEffect, useRef } from "react";
import gsap from "gsap";
import Skill from "../components/Skill.jsx";
import ScrollTexts from "../components/ScrollText.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import SocialButtons from "../components/SocialButtons.jsx";

export default function Home() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const animateHome = () => {
            const elements = sectionRef.current?.querySelectorAll(".animate-up");
            if (!elements || elements.length === 0) return;

            gsap.fromTo(
                elements,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2,
                }
            );
        };

        window.addEventListener("loaderFinished", animateHome);

        // fallback: if loader already gone before this mounts
        if (!document.getElementById("loader")) {
            animateHome();
        }

        return () => {
            window.removeEventListener("loaderFinished", animateHome);
        };
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="h-screen w-screen bg-transparent flex flex-col items-center justify-center font-black md:mt-0 mt-6"
            >
                <div className="w-[80%] h-full flex flex-col justify-center items-center">
                    <div className="flex md:flex-row flex-col md:justify-between items-center w-full">
                        {/* Left intro text */}
                        <div className="flex flex-col animate-up opacity-0 translate-y-20">
                            <p className="md:text-5xl font-[Helvetica] font-light text-2xl">
                                Hi I'm
                            </p>
                            <p className="md:text-[8rem] font-['Birthstone'] font-medium text-6xl">
                                Satyaki<br />Das
                            </p>
                        </div>

                        {/* Right socials + button */}
                        <div className="flex flex-col justify-center items-center md:h-[32rem] md:w-[32rem] w-[6rem] h-[8rem] mt-5 md:mt-0">
                            <div className="flex flex-row justify-between items-center animate-up opacity-0 translate-y-20">
                                <SocialButtons
                                    image={"https://img.icons8.com/ios-glyphs/90/linkedin.png"}
                                    link={`https://google.com`}
                                />
                                <SocialButtons image={"https://img.icons8.com/ios-glyphs/90/github.png"} />
                                <SocialButtons image={"https://img.icons8.com/ios-glyphs/90/discord-logo.png"} />
                            </div>

                            <div className="animate-up opacity-0 translate-y-20">
                                <button
                                    className="bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium md:mt-16"
                                    onClick={() =>
                                        document.getElementById("contact").scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Paragraphs */}
                    <div className="flex flex-row justify-between items-center w-full mt-16 md:mt-0">
                        <div className="font-medium flex flex-wrap w-[60%] animate-up opacity-0 translate-y-20">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                                mauris quis leo pulvina eleifend ut nec felis. Sed vel elit ac
                                risus bibendum ullamcorper vel in lorem. Sed sodales non elit
                                convallis sagittis. Morbi suscipit risus tincidunt, tincidunt
                                ante in, finibus augue. In condimentum nisi in rhoncus posuere.
                            </p>
                        </div>
                        <div className="text-sm font-medium flex flex-wrap w-[20%] animate-up opacity-0 translate-y-20">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                                mauris quis leo pulvinar eleifend ut nec felis. Sed vel elit ac
                                risus bibendum ullamcorper vel in lorem. Sed sodales non elit
                                convallis sagitt.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scrolling text */}
                <div className="animate-up opacity-0 translate-y-20">
                    <ScrollTexts
                        text={
                            "Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer"
                        }
                        start={0}
                        end={-600}
                    />
                </div>
            </section>

            {/* Other sections */}
            <Skill />
            <Projects />
            <Contact />
        </>
    );
}
