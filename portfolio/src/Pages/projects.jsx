import Navbar from "../components/StickyNavbar.jsx";
import ScrollStack, {ScrollStackItem} from "../blocks/Components/ScrollStack.jsx";
import backgroundImage from "../assets/background.jpeg";

export default function Projects() {
  return (
      <section className={`h-screen`}>
          <Navbar />
          <div className={`flex flex-col items-center justify-center h-full w-full`}>
              <ScrollStack>
                  <ScrollStackItem itemClassName={`h-fit w-full md:h-[32rem] backdrop-blur-sm`}>
                      <div className={`flex flex-col md:flex-row items-center justify-between h-full w-full`}>
                          <div className={`h-full w-[50%] bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${backgroundImage})`}}>
                          </div>
                          <div className={`h-full w-[40%]`}>
                              <p className={`text-4xl font-[Helvetica]`}>Project 1</p>
                              <p className={`mt-4 flex flex-wrap`}>lorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed do</p>
                              <div className={`w-40% h-fit p-6 flex justify-center items-center mt-2`}>
                                  <button className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`}>Know More</button>
                              </div>
                          </div>
                      </div>
                  </ScrollStackItem><ScrollStackItem itemClassName={`h-fit w-full md:h-[32rem] backdrop-blur-sm`}>
                      <div className={`flex flex-col md:flex-row items-center justify-between h-full w-full`}>
                          <div className={`h-full w-[40%]`}>
                              <p className={`text-4xl font-[Helvetica]`}>Project 1</p>
                              <p className={`mt-4 flex flex-wrap`}>lorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed do</p>
                              <div className={`w-40% h-fit p-6 flex justify-center items-center mt-2`}>
                                  <button className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`}>Know More</button>
                              </div>
                          </div>
                          <div className={`h-full w-[50%] bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${backgroundImage})`}}>
                          </div>
                      </div>
                  </ScrollStackItem><ScrollStackItem itemClassName={`h-fit w-full md:h-[32rem] backdrop-blur-sm`}>
                      <div className={`flex flex-col md:flex-row items-center justify-between h-full w-full`}>
                          <div className={`h-full w-[50%] bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${backgroundImage})`}}>
                          </div>
                          <div className={`h-full w-[40%]`}>
                              <p className={`text-4xl font-[Helvetica]`}>Project 1</p>
                              <p className={`mt-4 flex flex-wrap`}>lorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed dolorem ipsum dolor sit amet, consetetur adipiscing elit, sed do</p>
                              <div className={`w-40% h-fit p-6 flex justify-center items-center mt-2`}>
                                  <button className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`}>Know More</button>
                              </div>
                          </div>
                      </div>
                  </ScrollStackItem>
              </ScrollStack>
          </div>
      </section>
  );
}