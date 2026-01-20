"use client"

import { Bell, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UnivioLogo } from "@/components/ui/UnivioLogo" // I'll need to create this or mock it
import { CreateEventModal } from "@/components/CreateEventModal"
import { useState } from "react"
import { toast } from "sonner"

export function Header() {
    const [points, setPoints] = useState(1250)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-6">
                    <a href="#" className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-blue-950 rounded-lg flex items-center justify-center text-white font-bold">U</div>
                        <span className="font-bold text-xl tracking-tight hidden md:inline-block">Univio</span>
                    </a>

                    <div className="relative hidden md:block w-96">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search events, clubs, or people..."
                            className="w-full bg-secondary/50 pl-9 focus-visible:bg-secondary"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 mr-2">
                        <div className="group relative cursor-help">
                            <Badge variant="outline" className="h-8 px-3 gap-1.5 border-orange-200 bg-orange-50 text-orange-700 transition-all hover:bg-orange-100 hover:border-orange-300">
                                <span className="text-xs font-bold uppercase tracking-wider">Lvl 4</span>
                                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-white animate-pulse" />
                            </Badge>
                            <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-popover text-popover-foreground text-xs rounded-lg border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                Earn 250 more points to reach Level 5! Post events or RSVP to gain XP.
                            </div>
                        </div>
                        <div className="text-sm font-semibold text-muted-foreground">
                            <span className="text-foreground text-base">{points}</span> pts
                        </div>
                    </div>

                    <Button size="icon" variant="ghost" className="relative text-muted-foreground hover:text-foreground">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background animate-pulse" />
                    </Button>

                    <CreateEventModal onPost={() => {
                        setPoints(p => p + 50)
                        toast.success("Event Posted! +50 points", {
                            description: "You're getting closer to Level 5!",
                            icon: "🎉"
                        })
                    }} />

                    <Avatar className="h-9 w-9 border border-border">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>KD</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}
