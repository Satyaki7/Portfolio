import Myid from "../components/Myid";
import Navbar from "../components/StickyNavbar";

export default function Landing() {
  return (
    <div className="h-screen w-screen text-amber-50">
      <Navbar className="sticky top-0 col-span-2 z-50" />
      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-4rem)]">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="items-start text-left">
            <p className="text-2xl">Hi, I'am Satyaki Das</p>
            <p className="text-6xl">
              <strong>
                Software
                <br />
                Developer
              </strong>
            </p>
            <p className="text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Ullam<br/>
              laboriosam nemo vero atque omnis<br/> eligendi voluptatum cumque hic
              minima!<br/> Ut eveniet ea eos, optio nostrum <br/>voluptate perferendis
              illum mollitia rerum?
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full">
          <Myid />
        </div>
      </div>
    </div>
  );
}
