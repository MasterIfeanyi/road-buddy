'use client';
import { useState, useEffect } from 'react';
import { getShuffledQuestions } from '@/data/questions';
import { getStoredItem, storeItem, clearItems } from '@/lib/storage';
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import StartScreen from '@/components/StartScreen';

const TEST_MODE = true; // set to false before submitting!
const INTERVAL = TEST_MODE ? 5000 : 120000; // 10s while testing, 2min for real

export default function Game() {

    const [hearts, setHearts] = useState(5);
    const [score, setScore] = useState(0);
    const [started, setStarted] = useState(false);
    const [pool, setPool] = useState(() => getShuffledQuestions());
    const [qIndex, setQIndex] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [answer, setAnswer] = useState('');
    const [gameOver, setGameOver] = useState(false);


    useEffect(() => {
    if (gameOver || showQuestion) return;
    const timer = setTimeout(() => {
        setShowQuestion(true);
    }, INTERVAL);
    return () => clearTimeout(timer);
}, [gameOver, showQuestion]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHearts(getStoredItem('hearts', 5));
        setScore(getStoredItem('score', 0));
    }, []);

    useEffect(() => {
        storeItem('hearts', hearts);
        storeItem('score', score);
    }, [hearts, score]);

    function handleSubmit(e) {
        e.preventDefault();
        const correct = pool[qIndex]?.a.toLowerCase().trim();
        const given = answer.toLowerCase().trim();

        if (given === correct) {
            setScore((s) => s + 10);
        } else {
            setHearts((h) => {
                const next = h - 1;
                if (next <= 0) setGameOver(true);
                return next;
            });
        }

        setAnswer('');
        setShowQuestion(false);
        setQIndex((i) => (i + 1) % pool.length);
    }

    function handleRestart() {
        clearItems(['hearts', 'score']);
        setHearts(5);
        setScore(0);
        setPool(getShuffledQuestions());
        setQIndex(0);
        setGameOver(false);
    }

    if (!started) {
        return (
            <StartScreen onStart={() => {
                clearItems(['hearts', 'score']);
                setHearts(5);
                setScore(0);
                setStarted(true);
            }} />
        );
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div
                className={`road-scroll ${gameOver ? 'paused grayscale' : ''} relative w-full h-full max-w-[1300px] aspect-video bg-cover bg-center ${gameOver ? 'grayscale' : ''}`}
                style={{ backgroundImage: "url('/images/road.png')" }}
            >
                {/* Hearts top-left */}
                <div className="absolute top-4 left-4 flex gap-1 text-2xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < hearts ? '❤️' : '🖤'}</span>
                    ))}
                </div>

                {/* Score top-right */}
                <div className="absolute top-4 right-4 text-2xl font-bold text-black">
                    Score: {score}
                </div>

                {/* Car */}
                <img
                    src="/images/car.png"
                    alt="car"
                    className="absolute bottom-0 left-20 w-62"
                />

                {/* Question popup */}
                {showQuestion && !gameOver && pool[qIndex] && (
                    <form
                        onSubmit={handleSubmit}
                        className="absolute bottom-62 left-1/2 -translate-x-1/2 h-40 flex flex-col justify-center place-items-center gap-5 p-10! rounded-2xl border-4 border-sky-300 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                    >

                        <p className="text-center text-emerald-700 text-base leading-snug">
                            {pool[qIndex].q}
                        </p>

                        <input
                            autoFocus
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="border-2 border-sky-300 bg-sky-50 text-emerald-900 placeholder-sky-400 p-3 rounded-lg text-center font-semibold outline-none focus:border-emerald-500 focus:bg-white transition mx-auto px-6!"
                            placeholder="Type your answer"
                        />

                        <button
                            type="submit"
                            className="bg-emerald-500 text-white font-extrabold uppercase px-6! py-3 rounded-xl tracking-wide hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-transform shadow-[0_4px_0_rgba(5,150,105,0.7)] mx-auto"
                        >
                            Submit
                        </button>

                    </form>
                )}

                {/* Game over overlay */}
                {gameOver && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-red-600 text-6xl font-bold">GAME OVER</h1>
                        <button
                            onClick={handleRestart}
                            className="bg-blue-500 text-white px-6! py-3! rounded text-xl"
                        >
                            Play Again
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}