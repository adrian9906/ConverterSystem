
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/ui/layout/converterLayout";

export default function ConverterLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden">
            <SidebarProvider className="flex h-full w-full overflow-hidden">
                <AppSidebar />
                <SidebarInset className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <header className="flex h-16.5 shrink-0 items-center justify-between gap-2 px-4 bg-background z-10">
                        {/* Izquierda */}
                        <div className="flex items-center gap-2">
                            <SidebarTrigger className="-ml-1" size={'lg'} />
                        </div>

                        <div className="flex items-center gap-2">
                            asdasd
                        </div>
                    </header>

                    {/* Solo esta área hace scroll */}
                    <div className="flex-1 overflow-y-auto">
                        {children}
                    </div>

                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}