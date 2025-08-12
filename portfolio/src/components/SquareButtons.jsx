export default function SquareButtons({ imageSrc, altText, label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-3 py-2 bg-[#FFFFFF1F] text-white rounded-lg backdrop-blur-xl transition h-[64px] w-[64px]"
        >
            {imageSrc && (
                <img src={imageSrc} alt={altText || "Button Icon"} className="w-[42px] h-[42px]" />
            )}
            {label && <span>{label}</span>}
        </button>
    );
}
