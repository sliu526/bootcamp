"use client";
import { useState } from "react";

export default function Buttons(props) {
    const[buttonCount, setButtonCount] = useState(0);

    function increaseButtonCount() {
        setButtonCount(buttonCount + 1);
    }

    function resetButtonCount() {
        setButtonCount(0);
    }

    return <div>
        <button
            onClick={increaseButtonCount}
        >{props.buttonText}</button>
        <p>You clicked the {props.buttonText} {buttonCount} times!</p>

        <button
            onClick={resetButtonCount}
        >Click this to reset the {props.buttonText} counter!</button>
    </div>
}