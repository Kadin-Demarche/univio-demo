declare module 'react-confetti' {
    import React from 'react'

    export interface ConfettiProps {
        width?: number
        height?: number
        numberOfPieces?: number
        recycle?: boolean
        run?: boolean
        colors?: string[]
        opacity?: number
        initialVelocityX?: number
        initialVelocityY?: number
        tweenDuration?: number
        gravity?: number
        wind?: number
        friction?: number
        drawShape?: (ctx: CanvasRenderingContext2D) => void
        onConfettiComplete?: (confetti: unknown) => void
        className?: string
    }

    export default class Confetti extends React.Component<ConfettiProps> { }
}
