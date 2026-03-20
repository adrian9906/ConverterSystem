import { CheckCircle, Circle, Keyboard, Layers2, Play, ScanSearch } from "lucide-react";

export default function Home() {
    return (
        <div className="bg-[#f6f6ff] font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">

            <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl shadow-2xl shadow-indigo-500/10">
                <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center gap-8">

                    </div>
                </div>
            </nav>
            <main className="pt-20 ">
                <section className="relative min-h-screen w-full flex items-center  overflow-hidden px-6">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
                    </div>
                    <div className="max-w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-xs font-bold uppercase tracking-widest">
                                Suite Editorial de Próxima Generación
                            </span>
                            <h1 className="text-6xl md:text-8xl font-extrabold font-headline leading-[1.05] tracking-tighter text-on-surface">
                                Crea <span className="text-primary italic">Excelencia</span> Cinematográfica.
                            </h1>
                            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                                El espacio de trabajo definitivo para producción de video de alto rendimiento. Herramientas de precisión, automatización impulsada por IA y soberanía creativa total.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="kinetic-gradient text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-lg shadow-xl shadow-primary/30 hover:opacity-90 transition-all">Comienza a Crear Ahora</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden shadow-2xl bg-[#eef0ff] p-2">
                                <img className="rounded-lg w-full object-cover aspect-video" data-alt="Vista previa de interfaz de software de edición de video de alta gama en tonos oscuros" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg-OvJCNCc2laE9juskyB4jncT1G3zFEA1xqqqYfSLb2ZwpjbR_CrsLKsaUQtM_aEHjbKVq3Zjk5hkyt-QvrKVRnS_XcNORFPy5nBZ8U4AOfHZe47jUKPqhGlH5Ow-X5swOreB929mngoyn_RaVrRRR6ao8Wnn3WiYoYbj7NJ86ZqA6Hknr6xHhw-kz4CaDUar7wodav0eucvoNyg18OsBFDgWGaAdDHv6aWOvNCCMzZjeG0trFDufB2VnWIIoIqQxm2h8dR_RiQ" />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 bg-[#eef0ff]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-4">Soberanía Creativa Total</h2>
                            <p className="text-on-surface-variant text-lg">Libera todo el potencial de tus tomas originales con nuestro conjunto de herramientas de primera clase.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 bg-white p-8 rounded-lg flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500">
                                <div className="max-w-md">
                                    <ScanSearch className="w-10 h-10 text-primary" />
                                    <h3 className="text-2xl font-bold font-headline mb-4">Extracción de Fotogramas Sin Pérdida</h3>
                                    <p className="text-on-surface-variant leading-relaxed">Extrae imágenes de alta fidelidad de cualquier flujo 8K sin artefactos de compresión. Perfecto para pósters cinematográficos y activos promocionales de alta resolución.</p>
                                </div>
                                <div className="mt-12 flex gap-4 overflow-hidden">
                                    <div className="w-1/3 aspect-square bg-surface-container-high rounded-lg flex items-center justify-center">
                                        <img className="w-full h-full object-cover rounded-lg" data-alt="Extracción de fotogramas de naturaleza en alta resolución" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACyPsWnUFIpO6ZQ4BFVVWdRxwApKh3h3utL7ZMOOtRaxi-_jK_jHc48_ABtfqOZheootMQTHFDOWkmxlE_WwJaAVf681DOsCtDQXTCTHgJOsBNbFolCA_1nMqg7WTmLsW4-gxPXd0dJ5PaQMZtFDkcTa6sq3AwSTYOl-cHg5rfhjbbcgd767gtRy1KQI0GrJ2fX1-YhZJzq54fcidOT_NMIW1qsY58H1ztE3pZxmzJejFDk7WR88hKzLGQ2K09ctK-5Wi1eXvC1A" />
                                    </div>
                                    <div className="w-1/3 aspect-square bg-surface-container-high rounded-lg flex items-center justify-center">
                                        <img className="w-full h-full object-cover rounded-lg" data-alt="Fotograma de película cinematográfica" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDyKLdZ386JhqX86bR2BASSQiM_JctdveNFttW_MxS221Vp0_kTBBqP1z1gAWM626iZ1fOa3vVB98tlSAIBx3OJ4B4Td-xRyYRZx-pqL0KtvHX29HNTb7Lslyx7e4Y0YG1VJDjJUexMFhM-4AHIhj2dr8z1JsmsQ1157dQsI1b3BrZtrlaFgWCmeiTdmJKKPAH4tFOsYUMwpXpPi1ch7nBf6MeLD0S0TR6Z6QxJaUXuKNTjpJE3kVsLMXznuZwNFuYQS8sxGFvCg" />
                                    </div>
                                    <div className="w-1/3 aspect-square bg-surface-container-high rounded-lg flex items-center justify-center">
                                        <img className="w-full h-full object-cover rounded-lg" data-alt="Fotograma de producción en set de filmación" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2L1Y07f-iSti8Jz8ptr5ic13ZBh_zVwuUbpPg2Lxm05Ij-8mOttUdtRoTuPJzWT86hHuWflBKIjLB5F6A1JQzFnzXjTt3-TVyJBaUmOQtGM984H5zWKRdrPt1BitnZOGkqm5fz1qUPSBBXjz9l9CWXDZ0JhttOD3sncbWdfZXhCHV_j9yTfFcWOJVFWnipwfrIb32QVAkIACO0cDFzz7ZKBVKKDmUvG0LbhKmXL1KRNzESMOHGoQFXUwtBu_hAnoHk2np7kHFrw" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary text-[#f4f1ff] p-8 rounded-xl flex flex-col justify-between shadow-2xl shadow-primary/20">
                                <div>
                                    <Keyboard className="w-10 h-10 text-white" />
                                    <h3 className="text-2xl font-bold font-headline mb-4 text-white">Subtítulos Inteligentes</h3>
                                    <p className="opacity-80 leading-relaxed text-white">Generación dinámica de subtítulos con soporte multilenguaje y temporización rítmica automatizada. Distribución global, simplificada.</p>
                                </div>
                                <div className="mt-8 bg-[#f4f1ff]/10 p-4 rounded-lg space-y-3 font-mono text-sm">
                                    <div className="flex gap-4">
                                        <span className="opacity-50">00:04</span>
                                        <span>El horizonte espera...</span>
                                    </div>
                                    <div className="flex gap-4 border-l-2 border-on-primary pl-3">
                                        <span className="opacity-50">00:08</span>
                                        <span>Horizon nous attend...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#d9e2ff] p-8 rounded-xl">
                                <Layers2 className="w-10 h-10 text-primary" />
                                <h3 className="text-2xl font-bold font-headline mb-4">Perfiles por Lote</h3>
                                <p className="text-on-surface-variant leading-relaxed mb-8">Implementa perfiles de procesamiento personalizados en más de 100 archivos simultáneamente. Estandariza tu flujo de trabajo en segundos.</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant/10">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold">Redes Sociales 4K</span>
                                        </div>
                                        <span className="text-xs text-on-surface-variant">Activo</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant/10">
                                        <div className="flex items-center gap-3">
                                            <Circle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm font-bold">Copia de Seguridad Raw LTO</span>
                                        </div>
                                        <span className="text-xs text-on-surface-variant">En Cola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 bg-white p-8 rounded-xl overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold font-headline">Historial Operativo</h3>
                                        <p className="text-sm text-on-surface-variant">Estado en tiempo real de tu flujo de trabajo editorial</p>
                                    </div>
                                    <button className="text-primary font-bold text-sm">Ver Archivo</button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="text-xs text-on-surface-variant border-b border-outline-variant/10">
                                            <tr>
                                                <th className="pb-4 font-bold uppercase tracking-wider">Nombre del Proyecto</th>
                                                <th className="pb-4 font-bold uppercase tracking-wider">Formato</th>
                                                <th className="pb-4 font-bold uppercase tracking-wider">Tamaño</th>
                                                <th className="pb-4 font-bold uppercase tracking-wider">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="group hover:bg-surface-container-low transition-colors">
                                                <td className="py-4 font-semibold">cinematic_reel_final.mp4</td>
                                                <td className="py-4 text-on-surface-variant">ProRes 422</td>
                                                <td className="py-4 text-on-surface-variant">1.4 GB</td>
                                                <td className="py-4"><span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">COMPLETADO</span></td>
                                            </tr>
                                            <tr className="group hover:bg-surface-container-low transition-colors">
                                                <td className="py-4 font-semibold">mountain_climb_v03.mov</td>
                                                <td className="py-4 text-on-surface-variant">H.265</td>
                                                <td className="py-4 text-on-surface-variant">842 MB</td>
                                                <td className="py-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                                            <div className="h-full bg-primary w-2/3"></div>
                                                        </div>
                                                        <span className="text-[10px] font-bold">65%</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="group hover:bg-surface-container-low transition-colors">
                                                <td className="py-4 font-semibold">studio_session_raw.braw</td>
                                                <td className="py-4 text-on-surface-variant">BRAW</td>
                                                <td className="py-4 text-on-surface-variant">12.8 GB</td>
                                                <td className="py-4"><span className="px-2 py-1 rounded bg-[#d9e2ff] text-on-surface-variant text-xs font-bold">EN COLA</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}