import { useEffect } from "react";
import gsap from "gsap";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText.jsx";

export default function Loader() {
    useEffect(() => {
        // Animate loader out after a delay
        const tl = gsap.timeline({ delay: 2 });
        tl.to("#loader-text", {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
        }).to("#loader", {
            y: "-100%",
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                const loader = document.getElementById("loader");
                if (loader) loader.remove();
                document.body.classList.add("ready");
                window.dispatchEvent(new Event("loaderFinished"));
            },
        });
    }, []);

    return (
        <div
            id="loader"
            className="fixed inset-0 flex items-center justify-center bg-black text-amber-100 z-[9999]"
        >
            <div id="loader-text" className="text-6xl font-[Helvetica] font-bold">
                <DecryptedText
                    speed={100}
                    maxIterations={10}
                    text="Welcome to my Portfolio"
                    animateOn="view"
                    revealDirection="start"
                />
            </div>
        </div>
    );
}