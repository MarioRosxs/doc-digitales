import { Card, Button } from 'antd';

type PackageCardProps = {
  name: string,
  price: string,
  information?: string,
  description: string,
}

export default function PackageCard({ name, price, information, description }: PackageCardProps) {
  return (
    <Card variant="borderless" style={{ width: 250, height: 'auto', backgroundColor: "#d9eaf3" }}
    >
      <div className="flex flex-col gap-1 justify-center items-center text-center h-[100px] md:h-[120px] md:gap-2">
        <h2 className="font-extrabold text-[#387ab2] text-xl">{name}</h2>
        <hr className="border-t-2 border-[#bfdbea] w-full" />

        {information ?
          <h3 className="font-[900]">{information}</h3>
          :
          <h3 className="flex justify-center items-baseline gap-0.5">
            <span className="text-[10px]">$</span>
            <span className="text-2xl font-extrabold mt-1">{price}</span>
            <span className="text-[10px]">+ IVA/mes</span>
          </h3>
        }
        <p className="text-[10px]">{description}</p>

        <Button style={{ backgroundColor: "#387ab1" }} variant="solid" shape="round">
          <span className="text-white text-[10px] font-bold md:text-[12px] p-1">{information ? "Cotizar Paquete" : "Elegir"}</span>
        </Button>
      </div>
    </Card>
  )
}
