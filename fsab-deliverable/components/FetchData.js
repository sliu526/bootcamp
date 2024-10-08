"use client";
import { useEffect, useState } from "react";

export default function FetchData() {
    const [firebaseData, setFirebaseData] = useState([]); 

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("/api/test");
                const result = await response.json();
                setFirebaseData(result);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        }

        fetchData();
    }, []);

    return <div>
        <h1>data from firestore database</h1>
        <ul>
            {firebaseData.map((item) => (
                <li key={item.id}>
                    {item.name} 
                    <br></br>
                    <br></br>
                    {item.happy}
                    </li>
            ))}
        </ul>
    </div>
}