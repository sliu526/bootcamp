"use client";
import { useState } from "react";

export default function NewHello() {
    async function onSubmit() {
        const newHelloText = {
            newHello
        }
        const resp = await fetch ("http://localhost:8080/hello", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newHelloText)
        })
    }
    const [ newHello, setNewHello ] = useState("");

    return (
        <div>
        <h2>Add a new hello</h2>
        <button 
            name="newHello"
            value={newHello}
            onClick={onSubmit} 
            onChange = {(event) => setNewHello(event.target.value)}
        >ADD</button>
        </div>
    );
}