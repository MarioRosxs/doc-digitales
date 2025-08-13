import React from 'react';
import { Card } from 'antd';
import Image from "next/image";

type ServiceProps = {
    icon: string,
    description: string,
}

export default function Service({ icon, description }: ServiceProps) {

    return (
        <Card hoverable className="shadow-lg h-[144px] w-[170px] md:h-[160px] md:w-[200px]">
            <div className="flex flex-col items-center justify-between h-[96px] md:h-[120px]">
                <Image
                    className="dark:invert"
                    src={icon}
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                />
                <span className="text-center text-[10px] font-[600] md:text-[12px] md:px-3">{description}</span>
            </div>
        </Card>

    );
}
