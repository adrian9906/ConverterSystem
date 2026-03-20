'use client'

import { FileUpload } from "@/components/ui/file-upload";
import { CheckCircle, Smartphone, TvMinimal, Youtube, Zap } from "lucide-react";
import { useState } from "react";

export default function ConverterPage() {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };
    return (
        <div className="ml-64 flex flex-col h-screen relative">
            <div className="mt-16 p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div className="grid grid-cols-12 gap-8">
                    <section className="col-span-12 lg:col-span-8">
                        <div className="relative group h-[400px] bg-[#eef0ff] rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 hover:border-primary/50 transition-all duration-500 overflow-hidden">

                            <FileUpload onChange={handleFileUpload} />
                        </div>
                    </section>
                    <section className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                        <h3 className="text-sm font-label font-semibold text-primary uppercase tracking-widest px-1">Quick Profiles</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="p-4 rounded-lg bg-[#d9e2ff] hover:bg-[#1f2b49] transition-colors cursor-pointer group flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-400">
                                    <Youtube className="w-5 h-5" />
                                </div>
                                <div className="flex-1">

                                    <h4 className="text-sm font-semibold">YouTube 1080p</h4>
                                    <p className="text-xs text-[#535b71]">H.264 • High Bitrate • MP4</p>
                                </div>
                                <Zap className="w-4 h-4" />
                            </div>
                            <div className="p-4 rounded-lg bg-[#d9e2ff] hover:bg-[#1f2b49] transition-colors cursor-pointer group flex items-center gap-4 border border-primary/20 bg-primary/5">
                                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                                    <Smartphone className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold">TikTok / Shorts</h4>
                                    <p className="text-xs text-[#535b71]">9:16 Vertical • 1080x1920</p>
                                </div>
                                <CheckCircle className="w-4 h-4" />
                            </div>
                            <div className="p-4 rounded-lg bg-[#d9e2ff] hover:bg-[#1f2b49] transition-colors cursor-pointer group flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-[#963776]/10 flex items-center justify-center text-[#963776]">
                                    <TvMinimal className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold">Master 4K Archive</h4>
                                    <p className="text-xs text-[#535b71]">ProRes 422 • Uncompressed</p>
                                </div>
                                <Zap className="w-4 h-4" />
                            </div>
                        </div>
                    </section>
                    <section className="col-span-12">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-headline font-bold">Conversion Queue</h3>
                                <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">3 Active</span>
                            </div>
                            <button className="text-sm font-medium text-primary hover:underline transition-all">Clear Completed</button>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-panel rounded-xl p-5 flex items-center gap-6 border-l-4 border-primary">
                                <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-surface-container-lowest shrink-0">
                                    <img className="w-full h-full object-cover opacity-60" data-alt="Cinematic landscape video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiHe2foGUldsWtohJcqacuilaXD0l5Ovf4d39bXk0Yc_fYsZ1qUFe-DGBCaQIHsRDX8mgJd-P14qFByGfn4KiCPUWsihZnkx8S7Z8JtGe1o5unTKRAui94eyhjFkC18qtU3el8UjGm9DS2-cGoQ2iGj1qmc-3qw5OpA0ARKIvrI6QIL0olCX-G1JQy4E4wc41fhcVwe586HavNUcfNtljCml323UlSoNa_Yw0_WgHGvW2QYT_gtgJ0JhEcxHppTDGKIJDMzXwo7g" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[10px] font-mono bg-black/60 px-1.5 py-0.5 rounded">04:22</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between mb-2">
                                        <h4 className="font-semibold text-sm truncate">Project_Cinematic_Final_v2.mov</h4>
                                        <span className="text-xs font-mono text-primary">78%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                                        <div className="h-full bg-primary shadow-[0_0_8px_rgba(163,166,255,0.6)] w-[78%]"></div>
                                    </div>
                                    <div className="flex items-center gap-4 mt-3">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] text-[#535b71]">speed</span>
                                            <span className="text-[11px] text-[#535b71]">2.4x Speed</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] text-[#535b71]">schedule</span>
                                            <span className="text-[11px] text-[#535b71]">Est. 2m 14s</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">pause</span>
                                    </button>
                                    <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-error-dim transition-colors">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </div>
                            <div className="glass-panel rounded-xl p-5 flex items-center gap-6 border-l-4 border-[#963776]">
                                <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-surface-container-lowest shrink-0">
                                    <img className="w-full h-full object-cover opacity-60" data-alt="Urban city lights bokeh video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnWTMQqSG5hFBLZOCwwBgJ1MYPKM_xeDpmmJ9A9QryEnLJ3CrMjGIHPkWqtLFnn2SLh6ww5kg7MbCvfKwgaU6so2bN7xThV6WSZ-VK0NhW7UhtLLMW5u58JZOYphNa6FhDkJ2MDJSTzwgKbE1okoLKJj_wdS2UIm7IbU9ZY9weqoH54Befo1nPmpSi20qFU9nDu0HW85RDuSUjT9BjYnvdNcxxHwRr25qLkxpEWwG0-lx7Zoa4SeuuoGXAeyGo4RRa7g1AlX5Hkw" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-[#963776]/20 text-[#963776] p-2 rounded-full backdrop-blur-sm animate-pulse">
                                            <span className="material-symbols-outlined" >auto_awesome</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-sm truncate">TikTok_Dance_Challenge.mp4</h4>
                                            <span className="text-[10px] px-1.5 py-0.5 bg-[#963776]/10 text-[#963776] rounded border border-[#963776]/20">AI Upscaling</span>
                                        </div>
                                        <span className="text-xs font-mono text-[#963776]">12%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                                        <div className="h-full bg-[#963776] shadow-[0_0_8px_rgba(255,165,217,0.6)] w-[12%]"></div>
                                    </div>
                                    <div className="flex items-center gap-4 mt-3">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] text-[#535b71]">memory</span>
                                            <span className="text-[11px] text-[#535b71]">Neural Engine Active</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">pause</span>
                                    </button>
                                    <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-error-dim transition-colors">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-surface-container-low rounded-xl p-5 flex items-center gap-6 border-l-4 border-outline opacity-70">
                                <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-surface-container-lowest shrink-0">
                                    <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-outline">image</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between mb-2">
                                        <h4 className="font-semibold text-sm truncate">Presentation_Keynote_Draft.mkv</h4>
                                        <span className="text-xs font-mono text-[#535b71] italic">Paused</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                                        <div className="h-full bg-outline w-[45%]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                                        <span className="material-symbols-outlined">play_arrow</span>
                                    </button>
                                    <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-error-dim transition-colors">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="fixed bottom-8 right-8 px-6 py-3 rounded-full glass-panel border border-outline-variant/15 flex items-center gap-4 shadow-2xl z-40">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-on-surface tracking-wide uppercase">Engine Online</span>
                </div>
                <div className="w-px h-4 bg-outline-variant/30"></div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">cloud_done</span>
                    <span className="text-[11px] font-medium text-[#535b71]">Sync Complete</span>
                </div>
            </div>
        </div>
    )
}