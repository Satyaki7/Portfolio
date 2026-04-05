import Navbar from "../components/StickyNavbar.jsx";
import ScrollStack, {ScrollStackItem} from "../blocks/Components/ScrollStack.jsx";
import backgroundImage from "../assets/background.jpeg";
import game1 from '../assets/game1.jpeg'
import flightfix from '../assets/flightfix.png'
import Footer from "../components/Footer.jsx";

export default function Projects() {
  return (
      <>
          <section className={`h-screen overflow-hidden`}>
          <Navbar />
          
              <ScrollStack>
                  <ScrollStackItem itemClassName={`h-fit w-full md:h-[32rem] backdrop-blur-sm`}>
                      <div className={`flex flex-col md:flex-row items-center justify-between h-full w-full`}>
                          <div className={`h-full w-[50%] bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${game1})`}}>
                          </div>
                          <div className={`h-full w-[40%]`}>
                              <p className={`text-6xl font-[Helvetica] font-bold`}>Game 1</p>
                              <p className={`mt-4 flex flex-wrap text-xl`}>This is my first ever game. I created this recently trying to learn how games work using the GoDot engine and GDScript. I was a fun learning experience.</p>
                              <p className={`text-4xl font-[Helvetica] mt-4 font-bold`}>Tech Stack</p>
                              <p className={`text-xl font-[monospace] mt-2`}>- Godot Engine</p>
                              <p className={`text-xl font-[monospace]`}>- GDScript</p>

                              <div className={`w-40% h-fit p-6 flex justify-center items-center mt-2`}>
                                  <button className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`} onClick={() => window.open("https://github.com/Satyaki7/1st-Game")}>Know More</button>
                              </div>
                          </div>
                      </div>
                  </ScrollStackItem><ScrollStackItem itemClassName={`h-fit w-full md:h-[32rem] backdrop-blur-md`}>
                      <div className={`flex flex-col md:flex-row items-center justify-between h-full w-full`}>
                          <div className={`h-full w-[50%] bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${flightfix})`}}>
                          </div>
                          <div className={`h-full w-[40%]`}>
                              <p className={`text-6xl font-[Helvetica] font-bold`}>FlightFix</p>
                              <p className={`mt-4 flex flex-wrap text-xl`}>A small CURD app created using python library known as Tkinter.</p>
                              <p className={`text-4xl font-[Helvetica] mt-4 font-bold`}>Tech Stack</p>
                              <p className={`text-xl font-[monospace] mt-2`}>- Python(Tkinter)</p>
                              <p className={`text-xl font-[monospace]`}>- MySql</p>
                              <p className={`text-xl font-[monospace]`}>- Sql</p>

                              <div className={`w-40% h-fit p-6 flex justify-center items-center mt-2`}>
                                  <button className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`} onClick={() => window.open("https://github.com/Satyaki7/FlightFix-Tkinter-App")}>Know More</button>
                              </div>
                          </div>
                          
                      </div>
                  </ScrollStackItem><ScrollStackItem itemClassName={`h-fit w-full md:h-[32rem] backdrop-blur-md`}>
                      <div className={`flex flex-col md:flex-row items-center justify-between h-full w-full`}>
                          <div className={`h-full w-[50%] bg-cover bg-center rounded-2xl`} style={{backgroundImage: `url(${backgroundImage})`}}>
                          </div>
                          <div className={`h-full w-[40%]`}>
                              <p className={`text-6xl font-[Helvetica] font-bold`}>MoneyPro</p>
                              <p className={`mt-4 flex flex-wrap text-xl`}>A small CURD app created using python library known as Tkinter.</p>
                              <p className={`text-4xl font-[Helvetica] mt-4 font-bold`}>Tech Stack</p>
                              <p className={`text-xl font-[monospace] mt-2`}>- ReactJs</p>
                              <p className={`text-xl font-[monospace]`}>- SpringBoot</p>
                              <p className={`text-xl font-[monospace]`}>- Postgress</p>
                              <p className={`text-xl font-[monospace]`}>- Docker</p>

                              <div className={`w-40% h-fit p-6 flex justify-center items-center mt-2`}>
                                  <button className={`bg-transparent border border-black hover:bg-black hover:text-amber-100 h-[48px] w-[160px] rounded-xl font-medium`} onClick={() => window.open("https://github.com/mondalsyamantak/Expense-Tracker")}>Know More</button>
                              </div>
                          </div>
                      </div>
                  </ScrollStackItem>
              </ScrollStack>
          </section>
          {/* <section className={`w-screen mt-64`}>
                <Footer/>
            </section> */}
      </>
  );
}