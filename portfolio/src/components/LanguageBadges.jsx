export default function LanguageBadge({ image = "" }){
    return(
        <div
            className="w-[64px] h-[64px] bg-cover bg-center bg-red-400 m-4 rounded-xl"
            style={{ backgroundImage: `url(${image})` }}
        >
        </div>
    )
}