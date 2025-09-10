import { Accordion } from "radix-ui";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import LanguageBadge from "./LanguageBadges.jsx";
import githubIcon from "../assets/icons8-github-50.png";
import linkedin from "../assets/icons8-linkedin-50.png";
import React, { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure.jsx";
gsap.registerPlugin(ScrollTrigger);

export default function Skill() {
    const AccordingItemStyle = "w-full bg-transparent flex flex-col justify-center items-center";
    const AccordingTriggerStyle =
        "w-full h-[64px] bg-transparent hover:bg-black hover:text-amber-100 border-1 flex flex-row justify-between items-center rounded-xl shadow-[0_2px_10px] shadow-black/5 mt-2 text-2xl md:text-4xl font-[Helvetica] font-medium p-2";
    const AccordionContentStyle = "bg-transparent backdrop-blur-2xl w-full rounded-xl h-[16rem] mt-2 p-2";

    const frontRef = useRef(null);
    const backRef = useRef(null);
    const otherRef = useRef(null);

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
                                            <LanguageBadge image={html} name="HTML" progress={100} content={`The standard markup language used to structure content on the web.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={css} name="CSS" progress={100} content={`A style sheet language used to design and visually style web pages.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={js} name="JavaScript" progress={60} content={`A programming language that adds interactivity and dynamic behavior to websites.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={tailwind} name="Tailwind CSS" progress={100} content={`A utility-first CSS framework for rapidly building custom, responsive designs.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={typescript} name="TypeScript" progress={50} content={`A superset of JavaScript that adds static typing for safer and more maintainable code.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={react} name="React" progress={70} content={`A JavaScript library for building fast, reusable, and interactive user interfaces.`} />
                                        </div>
                                    </div>
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent flex justify-center items-center p-6">
                                        {/*<img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent" />*/}
                                        <div className={`flex flex-wrap text-black font-medium text-sm justify-center items-start w-[80%] h-full`}>
                                            <TextType text="I enjoy building clean, responsive, and user-friendly applications that balance functionality with design. My focus is on creating seamless experiences where every detail matters, from the structure and styling to interactivity and performance. I approach every project as both a technical challenge and a form of creative expression, blending precision with creativity to deliver work that feels purposeful and impactful."/>
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
                                            <LanguageBadge image={java} name="Java" progress={90} content={`A versatile, object-oriented language for building robust applications.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={py} name="Python" progress={90} content={`A powerful, beginner-friendly language for problem-solving and automation.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={sql} name="MySql" progress={90} content={`A relational database system for managing and organizing data.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={postgres} name="PostgresSQL" progress={60} content={`An advanced, open-source database focused on reliability and scalability.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={docker} name="Docker" progress={10} content={`A tool for containerizing applications to ensure consistency across environments.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={spring} name="Spring" progress={70} content={`A framework for building secure, scalable, and production-ready backend systems.`} />
                                        </div>
                                    </div>
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent flex justify-center items-center p-6">
                                        {/*<img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent" />*/}
                                        <div className={`flex flex-wrap text-black font-medium text-sm justify-center items-start w-[80%] h-full`}>
                                            <TextType text="On the backend, I focus on building secure, efficient, and scalable systems that power applications from behind the scenes. I enjoy working with data, optimizing performance, and designing architectures that ensure reliability. Every backend project is an opportunity to create a strong foundation that allows applications to grow, adapt, and perform seamlessly in real-world environments."/>
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
                                <p>Other Tools & Technologies</p>
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
                                            <LanguageBadge image={c} name="C++" progress={10} content={`A powerful language for performance-critical applications and problem-solving.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={dart} name="Dart" progress={10} content={`A modern, object-oriented language optimized for cross-platform apps.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={flutter} name="Flutter" progress={0} content={`A UI framework for building fast, native-like mobile and web applications.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={figma} name="Figma" progress={70} content={`A collaborative design tool for creating intuitive UI/UX prototypes.`} />
                                        </div>
                                        <div className="badge">
                                            <LanguageBadge image={git} name="Git" progress={80} content={`A version control system for managing code and enabling team collaboration.`} />
                                        </div>
                                    </div>
                                    <div className="h-[14rem] w-full hidden md:block bg-transparent flex justify-center items-center p-6">
                                        {/*<img src={Frontend} alt="myid" className="h-full w-full rounded-full object-contain bg-transparent" />*/}
                                        <div className={`flex flex-wrap text-black font-medium text-sm justify-center items-start w-[80%] h-full`}>
                                            <TextType text="Beyond frontend and backend, I explore tools and technologies that broaden my development workflow. From problem-solving with C++ to building cross-platform apps with Flutter, I enjoy experimenting with different domains of computer science. Tools like Git and Figma also play a key role in my process, helping me manage projects effectively while designing intuitive user experiences."/>
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
