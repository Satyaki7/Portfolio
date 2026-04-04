import { useState, useRef } from "react"

export default function TiltCard({ backgroundImage, title, description }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const rotateY = ((e.clientX - centerX) / rect.width) * 15
        const rotateX = ((centerY - e.clientY) / rect.height) * 15
        
        setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
    }

    return (
        <div className={`h-[32rem]  md:h-full w-full flex flex-col justify-center items-center mt-6`}>
            <div 
                ref={cardRef}
                id="card" 
                className="h-[80%] md:h-[24rem] w-full bg-center bg-cover rounded-xl overflow-hidden cursor-pointer transition-transform duration-100"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
            </div>
            <div className={`h-[20%] w-full bg-transparent mt-8`}>
                <p className={`text-4xl font-['helvetica'] font-bold`}>{title}</p>
                <p className={`text-2xl mt-2 flex flex-wrap`}>{description}</p>
            </div>
        </div>
    )
}
