'use client'
import { useState } from 'react'

const StartScreen = ({ onStart }) => {
    const [visible, setVisible] = useState(true)

    function handleStart() {
        setVisible(false)
        setTimeout(() => {
            onStart()
        }, 700)
    }

    return (
        <div className={`start-screen ${visible ? 'visible' : 'hidden'}`}>
            <div
                className="start-screen_bg"
                style={{ backgroundImage: "url('/images/valley-road.jpg')" }}
            >
                <div className="start-screen_overlay" />
                <div className="start-screen_message-container">
                    <p className="start-screen_title">Road Trip With Your Buddy</p>
                    <button className="start-screen_btn" onClick={handleStart}>
                        Press Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartScreen