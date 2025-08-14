import { Card } from 'antd';
import Image from "next/image";

type ServiceProps = {
    icon: string,
    description: string,
}

export default function Service({ icon, description }: ServiceProps) {

    return (
        <Card hoverable className="shadow-md shadow-gray-400 h-[144px] w-[170px] md:h-[170px] md:w-[220px]">
            <div className="flex flex-col items-center justify-between h-[96px] md:h-[120px]">
                <Image
                    src={icon}
                    alt="Icon service"
                    width={75}
                    height={75}
                />
                <p className="text-center text-[10px] font-[600] md:text-[12px] md:px-2">{description}</p>
            </div>
        </Card>

    );
}
