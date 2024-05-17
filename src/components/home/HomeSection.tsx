import Image from "next/image"

export default function HomeSection() {
    return (
      <section className="relative w-full h-screen flex flex-col justify-between items-start">
        <div className="flex justify-between w-full h-full">
            <div className="w-full flex items-center">
            <div className="flex flex-col justify-center max-w-4xl gap-4">
                <h1 className="text-5xl font-bold">Estudio Ghidini & Asociados</h1>
                <p className="text-base">
                En nuestro bufete, transformamos conflictos en soluciones. Con enfoques innovadores y un equipo dedicado, buscamos resolver tus problemas legales de manera efectiva y satisfactoria. ¡Contáctanos hoy mismo y déjanos ayudarte a encontrar la mejor salida!
                </p>
                <div className="">
                <button className="bg-[#4f46e5] text-white font-bold py-2 px-4 rounded-lg">Contactanos</button>
                </div>
            </div>
            <div className="polygon absolute inset-0 z-10 w-full">
            <Image src="/ciudad.jpg" alt="Logo" layout="fill" objectFit="cover" />
            </div>
            </div>
        </div>
      </section>
    );
  }