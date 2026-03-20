"use client"

import {
    Link2,
    ChevronRight,
    Video,
    FileArchive,
    FilePenLine,
    Clock3,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Separator } from "../separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../collapsible"

export function AppSidebar() {
    const navItems = [
        {
            title: "Video & Audio",
            url: "/converter/video-audio",
            icon: Video,
            isActive: true,
            items: [
                { title: "Video", url: "/converter" },
                { title: "Audio", url: "/converter/video-audio/audio" },
            ],
        },
        {
            title: "Compresión",
            url: "/converter/compress",
            icon: FileArchive,
            items: [
                { title: "Videos", url: "/converter/compress/video" },
                { title: "Audio", url: "/converter/compress/audio" },
                { title: "PDF & Documentos", url: "/converter/compress/documents" },
                { title: "GIF", url: "/converter/compress/gif" },
            ],
        },
    ]

    const navEditorNavs = [
        { title: "Editor", url: "/converter/editar", icon: FilePenLine },
        { title: "Cola", url: "/converter/batch", icon: Clock3 },
    ]

    return (
        <Sidebar
            collapsible="icon"
            className={[
                // ─── Surface light (análogo al surface-low del dark)
                "bg-[#f0f2f8]",
                "border-r-0",                 // No-Line Rule: sin borde
                "[&_[data-sidebar=sidebar]]:bg-[#f0f2f8]",
            ].join(" ")}
        >
            {/* ── HEADER ── */}
            <SidebarHeader className="bg-[#f0f2f8] px-3 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="/converter" className="flex items-center gap-3 group">
                                {/* Logo — gradiente primario del design system */}
                                <div
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                                    style={{
                                        background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                                    }}
                                >
                                    <Link2 className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none overflow-hidden">
                                    <span
                                        className="font-semibold text-sm truncate"
                                    >
                                        Converter
                                    </span>
                                    <span
                                        className="text-xs truncate"
                                        style={{ color: "#6b7499" }}
                                    >
                                        convertidor online free
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* Separador sutil — sin borde agresivo */}
            <div className="mx-3 h-px bg-[#d8dce8]" />

            {/* ── CONTENT ── */}
            <SidebarContent className="bg-[#f0f2f8]">
                <SidebarGroup>

                    {/* Label Navegación */}
                    <SidebarGroupLabel
                        style={{
                            fontSize: "0.6875rem",
                            fontWeight: 600,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            color: "#8b93b5",
                            paddingLeft: "0.5rem",
                            marginBottom: "0.25rem",
                        }}
                    >
                        Navegación
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        {navItems.map((item) => (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            tooltip={item.title}
                                            className={[
                                                // Base
                                                "rounded-lg px-3 py-2 text-sm font-medium",
                                                "transition-all duration-150",
                                                // Color texto
                                                "text-[#2d3460]",
                                                // Hover — surface-high del light
                                                "hover:bg-[#e2e6f3] hover:text-[#1a1f36]",
                                                // Active
                                                "active:scale-[0.98]",
                                                // Icon color
                                                "[&_svg]:text-[#6366f1] [&_svg]:h-4 [&_svg]:w-4",
                                            ].join(" ")}
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight
                                                className="ml-auto h-3.5 w-3.5 transition-transform duration-200
                                                           group-data-[state=open]/collapsible:rotate-90"
                                                style={{ color: "#8b93b5" }}
                                            />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub
                                            className="ml-4 border-l border-[#d0d4e8] pl-2"
                                        >
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        className={[
                                                            "rounded-md px-3 py-1.5 text-sm",
                                                            "text-[#4a5182]",
                                                            "hover:bg-[#e2e6f3] hover:text-[#1a1f36]",
                                                            "transition-colors duration-150",
                                                        ].join(" ")}
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        <a href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarGroupContent>

                    {/* Micro-separador entre grupos */}
                    <div className="mx-1 my-3 h-px bg-[#d8dce8]" />

                    {/* Label Herramientas */}
                    <SidebarGroupLabel
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.6875rem",
                            fontWeight: 600,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            color: "#8b93b5",
                            paddingLeft: "0.5rem",
                            marginBottom: "0.25rem",
                        }}
                    >
                        Herramientas
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navEditorNavs.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        className={[
                                            "rounded-lg px-3 py-2 text-sm font-medium",
                                            "text-[#2d3460]",
                                            "hover:bg-[#e2e6f3] hover:text-[#1a1f36]",
                                            "transition-all duration-150 active:scale-[0.98]",
                                            "[&_svg]:text-[#7c3aed] [&_svg]:h-4 [&_svg]:w-4",
                                        ].join(" ")}
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="shrink-0" />
                                            <span className="truncate">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarSeparator className="bg-[#d8dce8]" />
        </Sidebar>
    )
}