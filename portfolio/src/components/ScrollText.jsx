import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollTexts({ text = "", end = 0,start=0 }) {
    const textRef = useRef(null);
    const divRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.fromTo(
                textRef.current,
                { x: start }, // 👈 starting point
                {
                    x: end, // 👈 ending point
                    scrollTrigger: {
                        trigger: divRef.current,
                        start: "top bottom",
                        end: "top",
                        scrub: true,
                    },
                }
            );
        });

        mm.add("(max-width: 767px)", () => {
            gsap.fromTo(
                textRef.current,
                { x: start }, // 👈 different start for mobile
                {
                    x: end,
                    scrollTrigger: {
                        trigger: divRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        });

        return () => mm.revert();
    });


    return (
        <div ref={divRef} className="w-screen mt-4 overflow-x-clip">
            <p ref={textRef} className="text-4xl sm:text-6xl lg:text-8xl font-bold whitespace-nowrap font-['Birthstone']">
                {text}
            </p>
        </div>
    );
}
