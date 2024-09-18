"use client";
import { useState } from "react";
import Confetti from 'react-confetti';
import classes from "./confetti-button-styles.module.css"

export default function ConfettiButton() {
    const [confettiTrigger, setConfettiTrigger] = useState(false);

    function handleButtonClick() {
        setConfettiTrigger(true);
        setTimeout(() => setConfettiTrigger(false), 4000);
    }

    return <div>
        {confettiTrigger && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        <button
            onClick={handleButtonClick}
            className={classes.confetti}>
            Celebrate!
        </button>
    </div>
}