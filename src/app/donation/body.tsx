import Image from "next/image";

export default function DonateBody() {
    return (
        <div className="bg-white">
            <div className="bg-white max-w-6xl mx-auto px-6 py-4 flex items-center relative">

                <div>
                    <a href="#home">
                        <Image
                            src="/assets/logos/logo.png"
                            alt="Logo"
                            width={56}
                            height={56}
                            className="h-10 md:h-12 lg:h-14 w-auto"
                        />
                    </a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Ensemble, changeons des vies
                    </h1>
                </div>

            </div>

            <div className="bg-white py-10 px-6 md:px-12 rounded-2xl shadow-md lg:px-24">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Un simple geste peut nourrir, soigner ou scolariser un enfant 🤲.
                        Ce qui peut sembler petit pour vous représente énormément pour eux.
                    </p>
                </div>

                <p className="text-center text-lg font-semibold text-gray-700 mb-12">
                    Même 1 000 FCFA peut nourrir un enfant pendant plusieurs jours.
                    Faites un don maintenant et changez une vie 💚
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mb-10">

                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <a href="tel:+22896285094" className="flex flex-col items-center gap-3 text-center">
                            <Image
                                src="/assets/logos/Moov_money.jpeg"
                                alt="Flooz"
                                width={40}
                                height={40}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="text-xl font-bold text-green-600">
                                +228 96285094
                            </span>
                            <p className="text-sm text-gray-500">
                                Envoyez votre don via Flooz
                            </p>
                        </a>
                    </div>

                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <a href="tel:+22892731790" className="flex flex-col items-center gap-3 text-center">
                            <Image
                                src="/assets/logos/Mixx_by_Yas.jpg"
                                alt="Mixx"
                                width={40}
                                height={40}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="text-xl font-bold text-green-600">
                                +228 92731790
                            </span>
                            <p className="text-sm text-gray-500">
                                Envoyez votre don via Tmoney
                            </p>
                        </a>
                    </div>

                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <a
                            href="/assets/docs/rib_coopec.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 text-center"
                        >
                            <Image
                                src="/assets/logos/transactions-bank.jpg"
                                alt="bank"
                                width={40}
                                height={40}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="text-xl font-bold text-green-600 hover:text-yellow-500">
                                Voir le RIB
                            </span>
                            <p className="text-sm text-gray-500">
                                Effectuez un virement bancaire sécurisé
                            </p>
                        </a>
                    </div>

                </div>

                <h6 className="font-light text-gray-700 text-center mb-4 max-w-xl mx-auto">
                    Nous nous engageons à utiliser chaque don de manière transparente et responsable,
                    pour un impact réel et durable.
                </h6>

            </div>
        </div>
    );
}