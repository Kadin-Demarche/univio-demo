"use client"

import { Header } from "@/components/layout/Header"
import { MOCK_EVENTS } from "@/lib/mockEventData"
import { EventCard } from "@/components/feed/EventCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, MapPin, School, Calendar, Award } from "lucide-react"

export default function ProfilePage() {
    const user = {
        name: "Kadin",
        handle: "@kadin",
        school: "UC Berkeley",
        major: "Computer Science '26",
        points: 1250,
        level: 4,
        eventsAttended: 14,
        friends: 154
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <Header />

            <main className="container mx-auto max-w-4xl px-4 py-8">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-6 md:items-start mb-8">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background shadow-lg ring-1 ring-border">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>KD</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold flex items-center gap-2">
                                    {user.name}
                                    <Badge variant="outline" className="text-orange-700 bg-orange-50 border-orange-200">
                                        Lvl {user.level}
                                    </Badge>
                                </h1>
                                <p className="text-muted-foreground font-medium">{user.handle}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">Edit Profile</Button>
                                <Button variant="ghost" size="icon"><Settings className="w-5 h-5" /></Button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <School className="w-4 h-4" />
                                {user.school}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Award className="w-4 h-4" />
                                {user.major}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 py-2">
                            <div className="text-center p-3 bg-secondary/30 rounded-xl border border-border/50">
                                <div className="text-2xl font-bold text-foreground">{user.points}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Points</div>
                            </div>
                            <div className="text-center p-3 bg-secondary/30 rounded-xl border border-border/50">
                                <div className="text-2xl font-bold text-foreground">{user.eventsAttended}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Events</div>
                            </div>
                            <div className="text-center p-3 bg-secondary/30 rounded-xl border border-border/50">
                                <div className="text-2xl font-bold text-foreground">{user.friends}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Friends</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs */}
                <Tabs defaultValue="going" className="space-y-6">
                    <TabsList className="bg-transparent border-b border-border w-full justify-start h-auto p-0 rounded-none space-x-6">
                        <TabsTrigger
                            value="going"
                            className="rounded-none border-b-2 border-transparent px-0 py-2.5 font-semibold text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                        >
                            Going (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="past"
                            className="rounded-none border-b-2 border-transparent px-0 py-2.5 font-semibold text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                        >
                            Past Events
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="going" className="space-y-6 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MOCK_EVENTS.slice(0, 3).map(event => (
                                <EventCard key={event.id} event={event} onRsvp={() => { }} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="past" className="space-y-6 pt-4">
                        <div className="text-center py-12 text-muted-foreground bg-secondary/20 rounded-xl border border-dashed border-border">
                            No past events yet.
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}
