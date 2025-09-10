import { Accordion } from "radix-ui";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import LanguageBadge from "./LanguageBadges.jsx";
import githubIcon from "../assets/icons8-github-50.png";
import linkedin from "../assets/icons8-linkedin-50.png";
import React, { useEffect, useRef } from "react"; // 🔹 added useEffect, useRef
import ScrollTexts from "./ScrollText.jsx";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Frontend from "../assets/Frontend.png";
import myLogo from "../assets/myLogo.png";
import background from "../assets/background.jpeg";
import Backend from "../assets/Backend.png";
import Techstack from "../assets/Techstack.png";
import js from "../assets/Javascript.png";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import tailwind from "../assets/Tailwind.png";
import typescript from "../assets/TypeScript.png";
import java from "../assets/Java.png";
import py from "../assets/Python.png";
import sql from "../assets/Sql.png";
import postgres from "../assets/Postgres.png";
import docker from "../assets/Docker.png";
import c from "../assets/C++.png";
import dart from "../assets/Dart.png";
import figma from "../assets/Figma.png";
import git from "../assets/Git.png";
import spring from "../assets/Spring.png";
import flutter from "../assets/flutter.png";
import react from "../assets/React.png";
import gsap from "gsap";                          // 🔹 GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure.jsx"; // 🔹 ScrollTrigger
gsap.registerPlugin(ScrollTrigger);               // 🔹 register once

export default function Skill() {
    const AccordingItemStyle = "w-full bg-transparent flex flex-col justify-center items-center";
    const AccordingTriggerStyle =
        "w-full h-[64px] bg-transparent hover:bg-black hover:text-amber-100 border-1 flex flex-row justify-between items-center rounded-xl shadow-[0_2px_10px] shadow-black/5 mt-2 text-2xl md:text-4xl font-[Helvetica] font-medium p-2";
    const AccordionContentStyle = "bg-transparent backdrop-blur-2xl w-full rounded-xl h-[16rem] mt-2 p-2";

    // 🔹 refs for each badges grid
    const frontRef = useRef(null);
    const backRef = useRef(null);
    const otherRef = useRef(null);

    // 🔹 helper to animate a container's children
    const animateIn = (container) => {
        if (!container) return;
        const items = container.querySelectorAll(".badge"); // target wrappers
        if (!items.length) return;

        gsap.fromTo(
            items,
            { opacity: 0, y: 24, scale: 0.98 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
                stagger: 0.08,
                clearProps: "opacity,transform",
            }
        );
    };

    // 🔹 set initial hidden state and ScrollTriggers (fires once on first view)
    useEffect(() => {
        const containers = [frontRef.current, backRef.current, otherRef.current].filter(Boolean);
        containers.forEach((el) => {
            const items = el.querySelectorAll(".badge");
            gsap.set(items, { opacity: 0, y: 24 });
            ScrollTrigger.create({
                trigger: el,
                start: "top 85%",
                once: true,
                onEnter: () => animateIn(el),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    // 🔹 also animate when an accordion panel opens
    const handleAccordionChange = (val) => {
        // wait a tick so DOM/height is applied
        requestAnimationFrame(() => {
            const map = { "item-1": frontRef.current, "item-2": backRef.current, "item-3": otherRef.current };
            animateIn(map[val]);
        });
    };

    return (
        <section className={`h-fit`}>
            <ScrollTexts
                text={
                    "Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer Web-Designer"
                }
                start={-1200}
                end={-600}
            />
            <div
                className="w-full h-[150vh] flex flex-col justify-center items-center bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className={`h-fit w-[60%] flex justify-center items-start`}>
                    <TextPressure
                        text="Tech-Stack"
                        flex={true}
                        alpha={true}
                        stroke={true}
                        width={true}
                        weight={true}
                        italic={false}
                        textColor="#000000"
                        strokeColor="#ff0000"
                        minFontSize={36}
                    />
                </div>
                <div className="flex flex-col justify-center items-center w-[80%] md:h-[32rem]">
                    <Accordion.Root
                        className=" rounded-md w-[80%] h-full bg-transparent flex flex-col justify-center items-center"
                        type="single"
                        defaultValue="item-2"
                        collapsible
                        onValueChange={handleAccordionChange} // 🔹 hook animations on open
                    >
                        {/* Front-End */}
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
                                    {/* 🔹 badges grid with ref; each child wrapped in .badge */}
                                    <div ref={frontRef} className="grid grid-cols-3 gap-2">
                                        <div className="badge">
                                            <LanguageBadge image={html} name="HTML" progress={100} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={css} name="CSS" progress={100} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={js} name="JavaScript" progress={60} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={tailwind} name="Tailwind CSS" progress={100} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={typescript} name="TypeScript" progress={50} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={react} name="React" progress={70} content={`This is my first language`} />
                                        </div>
                                    </div>
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent flex justify-center items-center p-6">
                                        {/*<img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent" />*/}
                                        <div className={`flex flex-wrap text-black font-medium text-sm justify-center items-start w-[80%] h-full`}>
                                            <TextType text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.ed non mauris quis leo pulvinar eleifend ut nec felis.Sed vel elit ac risus bibendum ullamcorperel in lorem. Sed sodales non elit convallis sagitt.Lorem ipsum dolor sit amet,sectetur adipiscing elit.Sed non mauris quis leo pulvinar eleifend ut nec felis.Sed vel elit ac risus bibendum ullamcorpervel in lorem. Sed ales non elit convallis sagitt."/>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Back-End */}
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
                                    {/* 🔹 badges grid with ref */}
                                    <div ref={backRef} className="grid grid-cols-3 gap-2">
                                        <div className="badge">
                                            <LanguageBadge image={java} name="Java" progress={90} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={py} name="Python" progress={90} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={sql} name="MySql" progress={90} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={postgres} name="PostgresSQL" progress={60} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={docker} name="Docker" progress={10} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={spring} name="Spring" progress={70} content={`This is my first language`} />
                                        </div>
                                    </div>
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent flex justify-center items-center p-6">
                                        {/*<img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent" />*/}
                                        <div className={`flex flex-wrap text-black font-medium text-sm justify-center items-start w-[80%] h-full`}>
                                            <TextType text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.ed non mauris quis leo pulvinar eleifend ut nec felis.Sed vel elit ac risus bibendum ullamcorperel in lorem. Sed sodales non elit convallis sagitt.Lorem ipsum dolor sit amet,sectetur adipiscing elit.Sed non mauris quis leo pulvinar eleifend ut nec felis.Sed vel elit ac risus bibendum ullamcorpervel in lorem. Sed ales non elit convallis sagitt."/>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Others */}
                        <AccordionItem className={AccordingItemStyle} value="item-3">
                            <AccordionTrigger className={`${AccordingTriggerStyle} group`}>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                                <p>Others</p>
                                <ChevronDownIcon
                                    aria-hidden
                                    className="md:w-8 md:h-8 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                            </AccordionTrigger>
                            <AccordionContent className={AccordionContentStyle}>
                                <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent w-full h-full">
                                    {/* 🔹 badges grid with ref */}
                                    <div ref={otherRef} className="grid grid-cols-3 gap-2">
                                        <div className="badge">
                                            <LanguageBadge image={c} name="C" progress={10} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={dart} name="Dart" progress={10} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={flutter} name="Flutter" progress={0} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={figma} name="Figma" progress={70} content={`This is my first language`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={git} name="Git" progress={80} content={`This is my first language`} />
                                        </div>
                                    </div>
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent flex justify-center items-center p-6">
                                        {/*<img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent" />*/}
                                        <div className={`flex flex-wrap text-black font-medium text-sm justify-center items-start w-[80%] h-full`}>
                                            <TextType text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.ed non mauris quis leo pulvinar eleifend ut nec felis.Sed vel elit ac risus bibendum ullamcorperel in lorem. Sed sodales non elit convallis sagitt.Lorem ipsum dolor sit amet,sectetur adipiscing elit.Sed non mauris quis leo pulvinar eleifend ut nec felis.Sed vel elit ac risus bibendum ullamcorpervel in lorem. Sed ales non elit convallis sagitt."/>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion.Root>
                </div>
            </div>
        </section>
    );
}
