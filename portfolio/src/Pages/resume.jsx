import Navbar from "../components/StickyNavbar.jsx";
import resume from "../assets/AOP_Concepts.pdf"
import Footer from "../components/Footer.jsx";

export default function Resume(){
    return (
        <>
            <section className="h-screen">
                <Navbar/>
                <div className=" h-[80%] md:h-full w-full flex flex-col justify-center items-center mt-6">
                    <iframe
                        src={resume}
                        className="w-[80%] h-full border-0 rounded-lg shadow-lg"
                        allow="autoplay"
                    />
                </div>
                <div className={`w-full h-fit p-6 flex justify-center items-center mt-2`}>
                    <button
                        className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`}>Download
                        Resume
                    </button>
                </div>
            </section>
            <section className={`w-screen mt-64`}>
                <Footer/>
            </section>
        </>
    )
}