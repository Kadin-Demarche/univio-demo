"use client"

import { Header } from "@/components/layout/Header"
import { MOCK_EVENTS, Event } from "@/lib/mockEventData"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Share2, Heart, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function EventDetailPage() {
    const params = useParams()
    const id = params?.id as string
    const event = MOCK_EVENTS.find(e => e.id === id) || MOCK_EVENTS[0] // Fallback for demo

    const [isRsvped, setIsRsvped] = useState(false)

    const handleRsvp = () => {
        if (!isRsvped) {
            setIsRsvped(true)
            toast.success(`RSVP Confirmed! +${event.points} pts`, { icon: "🎟️" })
        } else {
            setIsRsvped(false)
        }
    }

    // Generate mock attendees
    const attendees = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        image: `https://i.pravatar.cc/150?u=${i + parseInt(event.id)}`
    }))

    return (
        <div className="min-h-screen bg-background pb-20">
            <Header />

            <main className="container mx-auto max-w-4xl px-4 py-6">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Feed
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Col: Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 right-4">
                                <Badge variant="secondary" className="backdrop-blur-md bg-white/90 text-black shadow-sm text-sm px-3 py-1">
                                    {event.category}
                                </Badge>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">{event.title}</h1>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <span className="font-medium text-foreground">Hosted by {event.host}</span>
                                {event.isVerified && (
                                    <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-100 px-1.5 py-0 h-5 text-[10px]">Verified</Badge>
                                )}
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">About Event</h3>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {event.description}
                                {"\n\n"}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        {/* Discussion Section */}
                        <div className="space-y-4 pt-4">
                            <h3 className="font-semibold text-lg">Discussion</h3>
                            <div className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>ME</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 relative">
                                    <Input placeholder="Ask a question or leave a comment..." className="pr-10" />
                                    <Send className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer hover:text-primary" />
                                </div>
                            </div>

                            {/* Mock Comment */}
                            <div className="flex gap-3 pt-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=99`} />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="bg-secondary/30 p-3 rounded-lg rounded-tl-none">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-semibold">Jane Doe</span>
                                        <span className="text-xs text-muted-foreground">2h ago</span>
                                    </div>
                                    <p className="text-sm text-foreground/80">Are non-students allowed to attend this event?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Sidebar */}
                    <div className="space-y-6">
                        <Card className="border-none shadow-lg bg-card sticky top-24">
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <Calendar className="w-5 h-5 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{event.date}</div>
                                            <div className="text-sm text-muted-foreground">Add to Calendar</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <Clock className="w-5 h-5 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{event.time}</div>
                                            <div className="text-sm text-muted-foreground"> PST</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <MapPin className="w-5 h-5 text-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{event.location}</div>
                                            <div className="text-sm text-muted-foreground">View Map</div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Going</span>
                                        <span className="font-semibold">{event.attendees + (isRsvped ? 1 : 0)}</span>
                                    </div>
                                    <div className="flex -space-x-2 overflow-hidden py-1">
                                        {attendees.map(a => (
                                            <Avatar key={a.id} className="inline-block h-8 w-8 ring-2 ring-background">
                                                <AvatarImage src={a.image} />
                                                <AvatarFallback>{a.id}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted ring-2 ring-background text-[10px] font-medium text-muted-foreground">
                                            +1k
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className={cn("w-full transition-all", isRsvped && "bg-green-600 hover:bg-green-700 text-white")}
                                    size="lg"
                                    onClick={handleRsvp}
                                >
                                    {isRsvped ? "You are going!" : "RSVP Now"}
                                </Button>

                                <div className="flex gap-2">
                                    <Button variant="outline" className="flex-1 gap-2" size="sm">
                                        <Share2 className="w-4 h-4" /> Share
                                    </Button>
                                    <Button variant="outline" className="flex-1 gap-2" size="sm">
                                        <Heart className="w-4 h-4" /> Save
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
