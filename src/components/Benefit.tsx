import { Avatar, List } from 'antd';
import { Span } from 'next/dist/trace';

type BenefitProps = {
    icon: string,
    title: string,
    description: string,
}
type BenefitsListProps = {
    benefits: BenefitProps[];
};

export default function Benefit({ benefits }: BenefitsListProps) {
    return (
        <>
            <List
                header={<h1 className="ml-12 font-extrabold text-xl">Beneficios</h1>}
                itemLayout="horizontal"
                split={false}
                dataSource={benefits}
                renderItem={(benefit, index) => (
                    <List.Item key={index} style={{ paddingTop: 2, paddingBottom: 2 }}>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<strong className="text-[14px]">{benefit.title}</strong>}
                            description={<p className="leading-tight text-neutral-600 font-bold text-[10px]" >{benefit.description}</p>}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}
