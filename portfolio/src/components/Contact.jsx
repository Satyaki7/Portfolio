import React from "react";
import LanguageBadge from "./LanguageBadges.jsx";
import SocialButtons from "./SocialButtons.jsx";
import github from "../assets/icons8-github-50.png";
import space from "../assets/space.jpeg";

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "1383be16-dc30-4bef-90bc-5af762abae9c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <section className="w-full h-fit bg-black bg-fixed text-white flex flex-col items-center justify-center px-6 mt-6" id="contact">
            <div className="max-w-6xl h-[40rem] w-full grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Left Side */}
                <div className="flex flex-col justify-center">
                    <p className="text-amber-100 font-medium">Let's talk</p>
                    <h1 className="text-5xl font-bold font-[Helvetica] mt-2">Contact</h1>
                    <p className="text-gray-400 mt-4">
                        Have a question or a project in mind? Feel free to reach out.
                    </p>
                    <p className="mt-4 text-gray-300">
                        <span className="font-medium">Location:</span> Kolkata, West Bengal
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="bg-neutral-950 w-full rounded-xl shadow-md flex justify-center items-center">
                    <form onSubmit={console.log("working")} className="flex flex-col space-y-4 w-full">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            className="p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            className="p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white"
                            required
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Message"
                            className="p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="p-3 rounded-md bg-transparent border-2 hover:bg-white transition text-white hover:text-black font-medium"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className={`w-full h-[20%] border-t-2 border-amber-50 flex flex-col md:flex-row justify-between items-center`}>
                <div className={`flex flex-row `}>
                    <SocialButtons image={github}/>
                    <SocialButtons image={github}/>
                    <SocialButtons image={github}/>
                </div>
                <div className={`flex flex-col text-white text-sm`}>
                    <p>Build with bla bla</p>
                    <p>Build with bla bla</p>
                    <p>Build with bla bla</p>
                </div>
                <div className={`flex flex-row justify-center items-center p-4 mt-4 overflow-hidden`}>
                    <iframe
                        style={{ borderRadius: "12px",overflow: "hidden" }}
                        src="https://open.spotify.com/embed/track/7s1bBdzV2K2FPicr9fH36k?utm_source=generator"
                        width="100%"
                        height="152"  // 👈 compact player height
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
