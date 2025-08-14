import { useEffect, useMemo, useRef, useState } from "react";

/**
 * PictureBelt
 * Props:
 *  - images: Array<{ src: string, alt?: string }>
 *  - speed?: number           // px per second (default 120). Higher = faster.
 *  - direction?: "left"|"right"  // scroll direction (default "left")
 *  - gap?: number             // gap between items in px (default 32)
 *  - height?: number          // image height in px (default 48)
 *  - pauseOnHover?: boolean   // pauses animation on hover (default true)
 *  - className?: string
 */
export default function AutomaticScroll({
                                        images,
                                        speed = 120,
                                        direction = "left",
                                        gap = 32,
                                        height = 48,
                                        pauseOnHover = true,
                                        className = "",
                                    }) {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);
    const [duration, setDuration] = useState(20); // seconds, computed after mount

    // Duplicate the list once to create a seamless loop
    const doubled = useMemo(() => [...images, ...images], [images]);

    useEffect(() => {
        if (!wrapperRef.current || !trackRef.current) return;

        const calc = () => {
            // We animate from translateX(0) to -50% (or +50%), so distance equals half the track width.
            const full = trackRef.current.scrollWidth;
            const halfDistance = full / 2;
            const seconds = Math.max(halfDistance / Math.max(speed, 1), 4); // clamp to avoid too fast
            setDuration(seconds);
        };

        // Calculate initially and on resize
        calc();
        const ro = new ResizeObserver(calc);
        ro.observe(trackRef.current);
        return () => ro.disconnect();
    }, [speed, images.length]);

    // inline CSS variables for dynamic duration & gap
    const styleVars = {
        "--pb-duration": `${duration}s`,
        "--pb-gap": `${gap}px`,
        "--pb-height": `${height}px`,
    };

    return (
        <div
            ref={wrapperRef}
            className={`relative w-full overflow-hidden ${className}`}
            style={styleVars}
        >
            {/* Animation styles (scoped enough to avoid conflicts) */}
            <style>{`
        @keyframes pb-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pb-scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .pb-track {
          display: flex;
          align-items: center;
          gap: var(--pb-gap);
          width: max-content;
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--pb-duration);
          animation-name: pb-scroll-left;
        }
        .pb-dir-right .pb-track { animation-name: pb-scroll-right; }
        .pb-pause:hover .pb-track { animation-play-state: paused; }
      `}</style>

            <div
                ref={trackRef}
                className={`pb-track ${direction === "right" ? "pb-dir-right" : ""} ${
                    pauseOnHover ? "pb-pause" : ""
                }`}
            >
                {doubled.map((img, i) => (
                    <div key={i} className="shrink-0 flex items-center">
                        <img
                            src={img.src}
                            alt={img.alt ?? ""}
                            style={{ height: "var(--pb-height)" }}
                            className="block object-contain"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
