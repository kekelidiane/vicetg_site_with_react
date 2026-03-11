import Footer from '../../components/layout/footer';
import Image from "next/image";

export default function DonatePage() {
    return (
        <>
            <main className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">

                {/* message */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Aidez 💚
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Votre soutien compte énormément. Grâce à vos dons, nous pouvons continuer
                        nos actions et aider encore plus de personnes, d'enfants.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 mb-10">

                    {/* flooz */}
                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/logos/Moov_money.jpeg"
                                alt="Flooz"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl font-bold text-green-600"> 96285094 </span>
                        </div>
                    </div>

                    {/* tmoney */}
                    <div className="border rounded-xl p-4 shadow-sm bg-white max-w-xs mx-auto">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/logos/Mixx_by_Yas.jpg"
                                alt="TMoney"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl font-bold text-green-600"> 92731790 </span>
                        </div>
                    </div>

                </div>

                {/* RIB */}
                <div className="border rounded-xl p-6 shadow-sm bg-white text-center max-w-md mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3"> Virement bancaire</h2>
                    <p className="text-2xl font-bold text-green-600">
                        TGXXXXXXX
                    </p>
                </div>

            </main>

            <Footer />
        </>
    );
}
