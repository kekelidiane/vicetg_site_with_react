import Image from "next/image";

function Navbar() {
    return (

        <nav className="flex justify-between items-center px-6 py-4">
            <a href="#home">
                <Image
                    src="/assets/logos/logo.png"
                    alt="Logo"
                    width={56}
                    height={56}
                    className="h-10 md:h-12 lg:h-14 w-auto"
                />
            </a>
            <ul className="flex gap-6 font-medium">
                <li><a href="#home" className="text-gray-800 hover:text-green-600">Accueil</a></li>
                <li><a href="#about" className="text-gray-800 hover:text-green-600">A propos de nous</a></li>
                <li><a href="#donate" className="text-gray-800 hover:text-green-600">Nous soutenir</a></li>
                <li><a href="#blog" className="text-gray-800 hover:text-green-600">Actualités</a></li>
                <li><a href="#contact" className="text-gray-800 hover:text-green-600">Nous contacter</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;
