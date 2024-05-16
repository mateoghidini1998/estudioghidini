import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full h-10 flex items-center justify-between">
        <div>
            <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
        </div>
        <nav>
            <ul className="flex gap-4 items-center">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}
