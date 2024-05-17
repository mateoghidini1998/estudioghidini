import { PiGavelBold } from "react-icons/pi";
import { FaScaleUnbalanced } from "react-icons/fa6";
import Business from "../icons/Business";
import Penal from "../icons/Penal";
import Family from "../icons/Family";
const ServicesSection = () => {
    return ( 
        <section id="services" className="w-full h-screen flex flex-col items-center justify-center pr-24 py-24 gap-4">
            <h2 className="text-5xl font-semibold">Áreas de Práctica</h2>
            <p>En nuestro bufete, transformamos conflictos en soluciones trabajando las siguientes áreas de practica.</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 text-center shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <Business/>
                    <h3 className="text-lg font-semibold">Derecho Empresarial</h3>
                    <ul className="">
                    <li className="text-sm text-gray-500 dark:text-gray-400">Sociedades Comerciales, Fideicomisos</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Defensa de la Competencia y del Consumidor</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Lealtad Comercial</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 text-center shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <PiGavelBold className="h-10 w-10 text-[#4f46e5] "/>
                    <h3 className="text-lg font-semibold">Resolución de Conflictos</h3>
                    <ul className="">
                    <li className="text-sm text-gray-500 dark:text-gray-400">Insolvencia, Concursos y Quiebras</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Conflictos laborales, colectivos e individuales</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Reclamos administrativos</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 text-center shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <Penal/>
                    <h3 className="text-lg font-semibold">Derecho Penal</h3>
                    <ul className="">
                    <li className="text-sm text-gray-500 dark:text-gray-400">Derecho Penal Económico</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Derecho Penal Tributario</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 text-center shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <Family/>
                    <h3 className="text-lg font-semibold">Derecho Civil y Familiar</h3>
                    <ul className="">
                    <li className="text-sm text-gray-500 dark:text-gray-400">Derecho de Familia</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Desarrollos Inmobiliarios</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 text-center shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <FaScaleUnbalanced className="h-10 w-10 text-[#4f46e5]" />
                    <h3 className="text-lg font-semibold">Derecho Administrativo y Regulatorio</h3>
                    <ul className="">
                    <li className="text-sm text-gray-500 dark:text-gray-400">Derecho Administrativo</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Derecho Regulatorio</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Derecho de la Salud</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 text-center shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800">
                    <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-lg font-semibold">Propiedad Intelectual y Tecnología</h3>
                    <ul className="">
                    <li className="text-sm text-gray-500 dark:text-gray-400">Medios y Entretenimientos</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Protección de Datos Personales</li>
                    <li className="text-sm text-gray-500 dark:text-gray-400">Programas de Compliance</li>
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default ServicesSection;