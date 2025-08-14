import Image from "next/image";

type StepProps = {
    icon: string;
    title: string;
    description: string;
}
export default function Step({ icon, title, description }: StepProps) {
    return (
        <div className="flex flex-col items-center w-24 md:w-44">
            <Image src={icon} alt="Icon step" width={75} height={75} />
            <h3 className="font-extrabold uppercase text-[10px] pt-1 text-[#8ace35] sm:text-lg">{title}</h3>
            <p className="text-center text-white font-[600] text-[8px] sm:text-xs">{description}</p>
        </div>
    )
}
