import { useGetPackagesQuery } from '@/api/packages';
import { Modal, Spin } from 'antd';
import PackageCard from './PackageCard';

type PackageModalProps = {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
};

export default function PackageModal({ isOpen, onOk, onCancel }: PackageModalProps) {
  const { data, error, isLoading } = useGetPackagesQuery(undefined, { skip: !isOpen });

  return (
    <Modal
      title={<h2 className="text-3xl text-center font-extrabold text-[#387ab2]">Lista de paquetes</h2>}
      width={1120}
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      centered
    >
      {isLoading && <div className="flex justify-center items-center w-full">
        <Spin size="large" /> </div>}
      {error && <p>Error al cargar paquetes</p>}
      <section className="flex flex-col gap-4 items-center sm:flex-row overflow-auto">
        {data && data.map(pkg => (
          <div
            key={pkg.id}
          >
            <PackageCard {...pkg} />
          </div>
        ))}
      </section>
    </Modal>
  );
}
