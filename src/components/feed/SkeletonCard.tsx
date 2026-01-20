import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <Card className="overflow-hidden border-border/50 bg-card">
            <Skeleton className="h-48 w-full" />
            <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start gap-2">
                    <div className="space-y-2 w-full">
                        <Skeleton className="h-6 w-3/4" />
                        <div className="flex items-center gap-2 mt-2">
                            <Skeleton className="h-5 w-5 rounded-full" />
                            <Skeleton className="h-4 w-1/3" />
                        </div>
                    </div>
                    <Skeleton className="h-8 w-8 rounded-full" />
                </div>

                <div className="space-y-1.5 pt-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                <div className="flex items-center justify-between pt-4 mt-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-9 w-20" />
                </div>
            </CardContent>
        </Card>
    )
}
