"use client";
import { useEffect, useState } from "react";

export default function Hello() {
    const [hello, setHello] = useState([])
    async function getHello() {
        const response = await fetch("http://localhost:8080/hello", {
            method: "GET",
        })
        const result = await response.json()
        setHello(result)
    }

    useEffect(() => {
        getHello()
    }, [])

    return (
        <div>
            <h1>HELLO!</h1>
        <ul>
            {hello.map((item) => (
                <li key={item.id}>
                    {item.valid} 
                    </li>
            ))}
        </ul>
        </div>
    )
}