import { Avatar, List } from 'antd';

type BenefitProps = {
    title: string,
    description: string,
}
type BenefitsListProps = {
    benefits: BenefitProps[];
    icon: string
};

export default function Benefit({ benefits, icon }: BenefitsListProps) {
    return (
        <>
            <List
                split={false}
                dataSource={benefits}
                renderItem={(benefit) => (
                    <List.Item key={benefit.title} className="!py-2">
                        <div className="flex items-start gap-3">
                            <Avatar src={icon} alt="Icono check" size={24} className="flex-shrink-0" />
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold text-neutral-800 leading-none mb-[2px]">
                                    {benefit.title}
                                </h3>
                                <p className="text-xs text-neutral-800 leading-tight">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </>
    )
}