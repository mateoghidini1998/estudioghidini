import Image from "next/image";
export const AboutSection = () => {
    return ( 
        <section id="about" className="w-full h-screen pr-24 gap-4">
            <div className="w-full flex items-center justify-around py-6 px-10">
                <div className="flex flex-col justify-center max-w-3xl gap-4">
                    <h3 className="text-2xl font-semibold">Nuestro Estudio</h3>
                    <p>Somos especialistas en la resolución de conflictos con enfoques alternativos que van más allá de los tradicionales litigios. Nos especializamos en la mediación, la negociación basada en intereses y la búsqueda de beneficios mutuos para todas las partes involucradas. Creemos firmemente que el diálogo constructivo puede conducir a soluciones más satisfactorias y duraderas que el enfrentamiento en el tribunal.
                    Nuestro enfoque en la mediación y la negociación basada en intereses se basa en el reconocimiento de que cada caso tiene una serie de posiciones, objetivos y necesidades únicas. No nos centramos exclusivamente en las posiciones adoptadas por las partes, sino que profundizamos para comprender los intereses subyacentes y los objetivos a largo plazo de cada individuo involucrado en el conflicto.
                    </p>
                </div>
                <div className="h-[400px] w-[400px] rounded-lg">
                    <img className="w-full h-full rounded-xl" src="/ciudad.jpg" alt="Logo" />
                </div>
            </div>
            <div className="w-full flex flex-row-reverse items-center justify-around py-6 px-10">
                <div className="flex flex-col justify-center max-w-3xl gap-4">
                    <h3 className="text-2xl font-semibold">Sobre Nosotros</h3>
                    <p>Al adoptar esta mentalidad, promovemos la economía del conflicto. Buscamos minimizar los costos emocionales y financieros asociados con los litigios prolongados, fomentando soluciones que sean mutuamente beneficiosas para todas las partes. Creemos que, al trabajar juntos para encontrar una solución equitativa, podemos lograr resultados más satisfactorios y reducir el impacto negativo del conflicto en su vida.
                    En nuestro estudio de abogados, nos enorgullece brindar un servicio legal centrado en el cliente y en la resolución eficiente de conflictos. Nuestro equipo de abogados altamente capacitados y dedicados está listo para ayudarlo(a) a enfrentar cualquier desafío legal que pueda enfrentar. Contáctenos hoy mismo para programar una consulta y comenzar a trabajar juntos hacia una resolución justa y satisfactoria.
                    </p>
                </div>
                <div className="h-[400px] w-[400px] rounded-lg">
                    <img className="w-full h-full rounded-xl" src="/ciudad.jpg" alt="Logo" />
                </div>
            </div>
            
        </section>
    );
}