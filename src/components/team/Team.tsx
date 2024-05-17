export default function Team() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-between py-36">
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-5xl font-semibold">Nuestro Equipo</h2>
            <p>Conoce a nuestros expertos legales, dedicados a brindarte soluciones excepcionales y personalizadas para cada caso.</p>
        </div>
        <div className="flex justify-center gap-2">
            <div className="flex flex-col items-center space-y-4 max-w-[400px]">
            <img
                alt="John Doe"
                className="h-[200px] w-[200px] rounded-full object-cover"
                height={300}
                src="/Pablo-Ghidini.jpeg"
                style={{
                aspectRatio: "300/300",
                objectFit: "cover",
                }}
                width={300}
            />
            <div className="space-y-1">
                <h3 className="text-xl font-bold">Pablo Ghidini</h3>
                <p className="text-gray-500 dark:text-gray-400">Managing Partner</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                John Doe is the managing partner of our law firm. He has over 15 years of experience in corporate law and
                has successfully represented clients in a wide range of industries.
            </p>
            </div>
            <div className="flex flex-col items-center space-y-4 max-w-[400px]">
            <img
                alt="Hernan Osores"
                className="h-[200px] w-[200px] rounded-full object-cover"
                height={300}
                src="/hernannn.png"
                style={{
                aspectRatio: "300/300",
                objectFit: "cover",
                }}
                width={300}
            />
            <div className="space-y-1">
                <h3 className="text-xl font-bold">Hernan Osores</h3>
                <p className="text-gray-500 dark:text-gray-400">Managing Partner</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                John Doe is the managing partner of our law firm. He has over 15 years of experience in corporate law and
                has successfully represented clients in a wide range of industries.
            </p>
            </div>
            <div className="flex flex-col items-center space-y-4 max-w-[400px]">
            <img
                alt="Horacio Ghidini"
                className="h-[200px] w-[200px] rounded-full object-cover"
                height={300}
                src="/horacio.png"
                style={{
                aspectRatio: "300/300",
                objectFit: "cover",
                }}
                width={300}
            />
            <div className="space-y-1">
                <h3 className="text-xl font-bold">Horacio Ghidini</h3>
                <p className="text-gray-500 dark:text-gray-400">Managing Partner</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                John Doe is the managing partner of our law firm. He has over 15 years of experience in corporate law and
                has successfully represented clients in a wide range of industries.
            </p>
            </div>
        </div>
    </section>
  )
}
