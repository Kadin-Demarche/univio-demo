"use client"

import { Event } from "@/lib/mockEventData"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Calendar, CheckCircle2, Heart } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface EventCardProps {
    event: Event
    onRsvp: (points: number) => void
}

export function EventCard({ event, onRsvp }: EventCardProps) {
    const [isRsvped, setIsRsvped] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const handleRsvp = () => {
        if (!isRsvped) {
            setIsRsvped(true)
            onRsvp(event.points)
        } else {
            setIsRsvped(false)
        }
    }

    return (
        <Card className="overflow-hidden border-border/50 bg-card hover:border-border transition-colors group">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                    <Badge variant="secondary" className="backdrop-blur-md bg-white/90 text-black shadow-sm font-medium">
                        {event.category}
                    </Badge>
                </div>
            </div>
            <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start gap-2">
                    <div>
                        <h3 className="font-bold text-lg leading-tight text-foreground transition-colors group-hover:text-primary">
                            {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="relative h-5 w-5 rounded-full overflow-hidden bg-muted">
                                <Image
                                    src={event.hostAvatar}
                                    alt={event.host}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                                <span className="text-sm font-medium text-foreground/80">{event.host}</span>
                                {event.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" fill="currentColor" color="white" />}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={cn("p-1.5 rounded-full transition-colors", isLiked ? "text-red-500 bg-red-50" : "text-muted-foreground hover:bg-muted")}
                    >
                        <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
                    </button>
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium text-foreground/80">{event.date}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50 mt-4">
                    <div className="text-xs font-medium text-muted-foreground">
                        <span className="text-foreground font-bold">{event.attendees}</span> going
                    </div>
                    <Button
                        onClick={handleRsvp}
                        variant={isRsvped ? "outline" : "default"}
                        size="sm"
                        className={cn("transition-all", isRsvped && "text-green-600 border-green-200 bg-green-50 hover:bg-green-100 hover:text-green-700")}
                    >
                        {isRsvped ? "Going ✓" : "RSVP"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
