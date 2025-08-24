import { Accordion } from "radix-ui";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";

export default function Skill(){
    const AccordingTriggerStyle = "w-full h-[64px] bg-white border-2 flex flex-col justify-center mt-5 rounded-2xl";
    return(
        <>
            <div className="w-full h-[100vh] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[64rem] h-[32rem]">
                    <Accordion.Root
                        className=" rounded-md w-full h-full bg-transparent flex flex-col justify-center items-center shadow-[0_2px_10px] shadow-black/5"
                        type="single"
                        defaultValue="item-1"
                        collapsible
                    >
                        <AccordionItem className={AccordingTriggerStyle} value="item-1">
                            <AccordionTrigger>Front-End</AccordionTrigger>
                            <AccordionContent className="flex justify-center items-center w-[64rem] h-[16rem]">
                                <div className="h-full w-full">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris quis leo pulvinar
                                        eleifend ut nec felis. Sed vel elit ac risus bibendum ullamcorper vel in lorem. Sed
                                        sodales non elit convallis sagittis. Morbi suscipit risus tincidunt, tincidunt ante
                                        in, finibus augue. In condimentum nisi in rhoncus posuere.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className={AccordingTriggerStyle} value="item-2">
                            <AccordionTrigger>Back-End</AccordionTrigger>
                            <AccordionContent className="flex justify-center">
                                Yes. It's unstyled by default, giving you freedom over the look and
                                feel.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem className={AccordingTriggerStyle} value="item-3">
                            <AccordionTrigger>Tools & Tech</AccordionTrigger>
                            <AccordionContent className="flex justify-center">
                                Yes! You can animate the Accordion with CSS or JavaScript.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion.Root>
                </div>
            </div>
        </>
    )
}