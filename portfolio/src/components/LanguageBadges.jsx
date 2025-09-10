import * as HoverCard from "@radix-ui/react-hover-card";
import * as Progress from "@radix-ui/react-progress";

export default function ImageHoverCard({ image ,progress =0,content="",name=""}) {
    return (
        <HoverCard.Root openDelay={0} closeDelay={0}>
            <HoverCard.Trigger asChild>
                <button
                    className="w-[64px] h-[64px] bg-cover bg-center m-4 rounded-xl"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </HoverCard.Trigger>
            <HoverCard.Content
                side="top-end"
                className="w-[300px] rounded-xl bg-white p-4 shadow-lg border border-gray-200"
            >
                <div className="flex gap-4">
                    <img
                        src={image}
                        alt="Radix"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-sm mb-2">
                            {content}
                        </p>

                        {/* Progress Bar */}
                        <Progress.Root
                            className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200"
                            value={progress}
                        >
                            <Progress.Indicator
                                className="h-full bg-gray-600 transition-transform duration-500"
                                style={{ transform: `translateX(-${100 - progress}%)` }}
                            />
                        </Progress.Root>
                    </div>
                </div>
            </HoverCard.Content>
        </HoverCard.Root>
    );
}
