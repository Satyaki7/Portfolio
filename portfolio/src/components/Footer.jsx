import SocialButtons from "./SocialButtons.jsx";
import linkedIn from "../assets/icons8-linkedin-50.png"
import github from "../assets/icons8-github-50.png"
import discord from "../assets/icons8-discord-90.png"

export default function Footer(){
    return(
        <footer>
            <div className={`w-full h-fit border-t-2 border-amber-50 flex flex-col md:flex-row justify-between items-center bg-black`}>
                <div className={`flex flex-row `}>
                    <SocialButtons image={linkedIn} link={`https://www.linkedin.com/in/satyaki-das7/`} />
                    <SocialButtons image={github} link={`https://github.com/Satyaki7`} />
                    <SocialButtons image={discord} link={`https://discord.gg/bUQywpRE`} />
                </div>
                <div className={`flex flex-col text-amber-100 text-sm`}>
                    <p>Build with React</p>
                    <p>Styled with Tailwind</p>
                    <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
                </div>
                <div className={`flex flex-row justify-center items-center p-4 mt-4 overflow-hidden`}>
                    <iframe
                        style={{ borderRadius: "12px", overflow: "hidden" }}
                        src="https://open.spotify.com/embed/track/7s1bBdzV2K2FPicr9fH36k?utm_source=generator"
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </footer>
    )
}