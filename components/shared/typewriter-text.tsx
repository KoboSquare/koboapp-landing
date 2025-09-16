"use client"
import { Typewriter } from 'react-simple-typewriter'

function TypewriterText({ words }: { words: string[] }) {
    return (
        <Typewriter
            words={words}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    )
}

export default TypewriterText
