'use client';
import { steps } from "@/data/steps";
import Step from "../StepCard";
import { useState } from "react";
import ContactActions from "./ContactActions";
import PackageModal from "./PackageListModal";


export default function Contact() {
    const [isPackageOpen, setIsPackageOpen] = useState(false);
    const showModal = () => setIsPackageOpen(true);
    const closeModal = () => setIsPackageOpen(false);

    return (
        <div className="flex flex-col gap-4 md:gap-6">

            <section className="flex flex-row justify-around  p-4 bg-[#2e4ec4]">
                {steps.map((step, index) => (
                    <Step key={index} icon={step.icon} title={step.title} description={step.description} />
                ))}
            </section>

            <ContactActions showModal={showModal} />

            <PackageModal
                isOpen={isPackageOpen}
                onOk={closeModal}
                onCancel={closeModal}
            />

        </div>
    )
}
