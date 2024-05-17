import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 h-14 flex items-center px-6 gap-4 z-50">
      <div className="flex items-center h-full mt-2 ">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <nav>
        <ul className="flex gap-4 items-center">
          <li><Link href="#">Inicio</Link></li>
          <li><Link href="#">Sobre Nosotros</Link></li>
          <li><Link href="#">Servicios</Link></li>
          <li><Link href="#">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
