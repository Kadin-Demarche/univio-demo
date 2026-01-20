"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Calendar as CalendarIcon, MapPin, Image as ImageIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface CreateEventModalProps {
    onPost: () => void
}

export function CreateEventModal({ onPost }: CreateEventModalProps) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))

        setLoading(false)
        setOpen(false)
        onPost()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
                    <Plus className="h-4 w-4" />
                    <span className="hidden sm:inline">Post Event</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] gap-6">
                <DialogHeader>
                    <DialogTitle>Create Campus Event</DialogTitle>
                    <DialogDescription>
                        Share an event with the UC Berkeley community. Earn 50 points!
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Event Title</Label>
                            <Input id="title" placeholder="e.g. End of Semester Bonfire" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Date</Label>
                                <Button variant="outline" type="button" className="w-full justify-start text-left font-normal text-muted-foreground">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    Pick a date
                                </Button>
                            </div>
                            <div className="space-y-2">
                                <Label>Time</Label>
                                <Input type="time" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input id="location" placeholder="Add location" className="pl-9" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="What's happening? Add details about your event..."
                                className="min-h-[100px]"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                            {loading ? "Posting..." : "Post Event"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
