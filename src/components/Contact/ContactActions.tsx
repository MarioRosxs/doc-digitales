import { Button } from 'antd';

type ContactActionsProps = {
  showModal: () => void;
}

export default function ContactActions({ showModal }: ContactActionsProps) {
  return (
    <>
      <section className="flex justify-center">
        <p className="text-[10px] text-neutral-600 font-bold text-center md:text-[12px] sm:w-[390px]">
          ¿Quieres cambiar a tu Conta? Nosotros nos encargamos de llevar a cabo la transición de toda tu contabilidad hasta el día de hoy.
        </p>
      </section>
      <section className="flex flex-col gap-2 items-center sm:flex-row md:justify-center md:gap-4 sm:mx-32">
        <Button style={{ background: "#8ace35" }} variant="solid" shape="round" onClick={showModal} className="w-2/3">
          <span className="text-white text-[10px] font-bold md:text-[12px]">Ver paquetes</span>
        </Button>
        <Button style={{ background: "#2e4ec4" }} variant="solid" shape="round" className="w-2/3">
          <span className="text-white text-[10px] font-bold md:text-[12px]">Agenda una cita con un contador experto</span>
        </Button>
      </section>
    </>
  )
}
