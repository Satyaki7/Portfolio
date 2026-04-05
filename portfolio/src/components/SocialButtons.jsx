export default function SocialButtons({ image, size = "64px",link }) {
    return (
        <button
            className="bg-cover bg-center m-4 rounded-xl hover:shadow-xl hover:bg-transparent"
            style={{
                width: size,
                height: size,
                backgroundImage: `url(${image})`,
            }}
            onClick={() => window.open(link, "_blank")}
        />
    );
}
