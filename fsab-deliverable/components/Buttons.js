"use client";
import { useState } from "react";
import classes from "./buttons-styles.module.css"

export default function Buttons(props) {
    const[buttonCount, setButtonCount] = useState(0);

    function increaseButtonCount() {
        setButtonCount(buttonCount + 1);
    }

    function resetButtonCount() {
        setButtonCount(0);
    }

    return <div className={classes.button}>
        <button
            onClick={increaseButtonCount}
        >{props.buttonText}</button>
        <p>{buttonCount} likes!</p>

        <button
            onClick={resetButtonCount}
        >Reset likes</button>
    </div>
}