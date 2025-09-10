import React, { useState } from "react";
import SocialButtons from "./SocialButtons.jsx";
import linkedIn from "../assets/icons8-linkedin-50.png";
import github from "../assets/icons8-github-50.png";
import discord from "../assets/icons8-discord-90.png";

const SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY"; // 👈 replace

export default function Contact() {
    const [submitting, setSubmitting] = useState(false);

    const canSendEmail = () => {
        const data = JSON.parse(localStorage.getItem("contactRate") || "{}");
        const now = Date.now();

        // Filtering out timestamps older than 24 hours
        const recent = (data.timestamps || []).filter(
            (t) => now - t < 24 * 60 * 60 * 1000
        );

        if (recent.length >= 2) return false;
        return true;
    };

    const recordEmailSent = () => {
        const data = JSON.parse(localStorage.getItem("contactRate") || "{}");
        const now = Date.now();
        const recent = (data.timestamps || []).filter(
            (t) => now - t < 24 * 60 * 60 * 1000
        );
        recent.push(now);
        localStorage.setItem("contactRate", JSON.stringify({ timestamps: recent }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!canSendEmail()) {
            alert("You have reached the 24-hour limit of 2 emails.");
            return;
        }

        setSubmitting(true);

        // Execute reCAPTCHA
        const token = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });

        const formData = new FormData(event.target);
        formData.append("access_key", "1383be16-dc30-4bef-90bc-5af762abae9c");
        formData.append("g-recaptcha-response", token);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                recordEmailSent();
                alert("Message sent successfully!");
                event.target.reset();
            } else {
                alert("Error: " + res.message);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again later.");
        } finally {
            setSubmitting(false);
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
                    <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-full">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name :)"
                            className="p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="example@gmail.com"
                            className="p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white"
                            required
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Let's connect."
                            className="p-3 rounded-md bg-neutral-900 border border-neutral-800 text-white"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="p-3 rounded-md bg-transparent border-2 hover:bg-white transition text-white hover:text-black font-medium"
                        >
                            {submitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Social & Footer */}
            <div className={`w-full h-[20%] border-t-2 border-amber-50 flex flex-col md:flex-row justify-between items-center`}>
                <div className={`flex flex-row `}>
                    <SocialButtons image={linkedIn} link={`https://www.linkedin.com/in/satyaki-das7/`}/>
                    <SocialButtons image={github} link={`https://github.com/Satyaki7`}/>
                    <SocialButtons image={discord} link={`https://discord.gg/bUQywpRE`}/>
                </div>
                <div className={`flex flex-col text-amber-100 text-sm`}>
                    <p>Build with React</p>
                    <p>Styled with Tailwind</p>
                    <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
                </div>
                <div className={`flex flex-row justify-center items-center p-4 mt-4 overflow-hidden`}>
                    <iframe
                        style={{ borderRadius: "12px",overflow: "hidden" }}
                        src="https://open.spotify.com/embed/track/7s1bBdzV2K2FPicr9fH36k?utm_source=generator"
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
