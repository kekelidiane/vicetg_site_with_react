import Image from "next/image";

export default function DonateBody() {
    return (
        <div>

            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center relative">

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
                    <h1 className="text-3xl md:text-2xl font-bold text-gray-800">
                        Votre soutien compte énormément
                    </h1>
                </div>

            </div>

            <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Aidons les 💚
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Votre soutien compte énormément. Grâce à vos dons, nous pouvons continuer
                        nos actions et aider encore plus de personnes, d'enfants.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mb-5">

                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/logos/Moov_money.jpeg"
                                alt="Flooz"
                                width={40}
                                height={40}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="text-2xl font-bold text-green-600"> +228 96285094 </span>
                        </div>
                    </div>

                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/logos/Mixx_by_Yas.jpg"
                                alt="TMoney"
                                width={40}
                                height={40}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="text-2xl font-bold text-green-600"> +228 92731790 </span>
                        </div>
                    </div>

                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/logos/transactions-bank.jpg"
                                alt="bank"
                                width={40}
                                height={40}
                                className="w-20 h-20 object-contain"
                            />
                            <a
                                href="/assets/docs/rib_coopec.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer">
                                <span className="text-2xl font-bold text-green-600 hover:text-yellow-500 text-center">
                                    Relevé d'Identité Bancaire
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}