import { Accordion } from "radix-ui";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";
import Plasma from "../blocks/Backgrounds/Plasma/Plasma.jsx";
import LanguageBadge from "./LanguageBadges.jsx";
import githubIcon from "../assets/icons8-github-50.png";
import linkedin from "../assets/icons8-linkedin-50.png";
import React from "react";
import ScrollTexts from "./ScrollText.jsx";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Frontend from "../assets/Frontend.png"
import myLogo from "../assets/myLogo.png";
import background from "../assets/background.jpeg";
import Backend from "../assets/Backend.png";
import Techstack from "../assets/Techstack.png";


export default function Skill(){

    const AccordingItemStyle = "w-full bg-transparent flex flex-col justify-center items-center"
    const AccordingTriggerStyle = "w-full h-[64px] bg-transparent hover:bg-black hover:text-amber-100 border-1 flex flex-row justify-between items-center rounded-xl shadow-[0_2px_10px] shadow-black/5 mt-2 text-2xl md:text-4xl font-[Helvetica] font-medium p-2";
    const AccordionContentStyle = "bg-transparent backdrop-blur-2xl w-full rounded-xl h-[16rem] mt-2 p-2";


    return(
        <section>
            <ScrollTexts text={"Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer"} start={-1200} end={-600}/>
            <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${background})`}}>
                <div className="flex flex-col justify-center items-center w-[80%] md:h-[32rem]">
                    <Accordion.Root
                        className=" rounded-md w-[80%] h-full bg-transparent flex flex-col justify-center items-center"
                        type="single"
                        defaultValue="item-2"
                        collapsible
                    >
                        <AccordionItem className={AccordingItemStyle} value="item-1">
                            <AccordionTrigger className={`${AccordingTriggerStyle} group`}>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                                <p>Front-End</p>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 ransition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                            </AccordionTrigger>
                            <AccordionContent className={AccordionContentStyle}>
                                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent w-full h-full">
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent">
                                        <img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent"/>

                                    </div>
                                    <div className="grid grid-cols-3">
                                            <LanguageBadge image={githubIcon} />
                                            <LanguageBadge image={"https://picsum.photos/200"} />
                                            <LanguageBadge image={githubIcon} />
                                            <LanguageBadge image={githubIcon} />
                                            <LanguageBadge image={githubIcon} />
                                            <LanguageBadge image={githubIcon} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className="w-full bg-transparent flex flex-col justify-center items-center" value="item-2">
                            <AccordionTrigger className={`${AccordingTriggerStyle} group`}>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                                <p>Back-End</p>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                            </AccordionTrigger>

                            <AccordionContent className={AccordionContentStyle}>
                                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent w-full h-full">
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent">
                                        <img src={Backend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent"/>

                                    </div>
                                    <div className="grid grid-cols-3">
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={"https://picsum.photos/200"} />
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={githubIcon} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>



                        <AccordionItem className={AccordingItemStyle} value="item-3">
                            <AccordionTrigger className={`${AccordingTriggerStyle} group`}>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                                <p>Tools & Technology</p>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                            </AccordionTrigger>
                            <AccordionContent className={AccordionContentStyle}>
                                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent w-full h-full">
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent">
                                        <img src={Techstack} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent"/>

                                    </div>
                                    <div className="grid grid-cols-3">
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={"https://picsum.photos/200"} />
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={githubIcon} />
                                        <LanguageBadge image={githubIcon} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion.Root>
                </div>
            </div>
        </section>
    )
}