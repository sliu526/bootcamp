"use client";
import { useEffect, useState } from "react";

export default function FetchMoreData() {
    const [firebaseData, setFirebaseData] = useState([]); 

    useEffect(() => {
        const fetchMoreData = async() => {
            try {
                const response = await fetch("/api/Basics");
                const result = await response.json();
                setFirebaseData(result);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        }

        fetchMoreData();
    }, []);

    return <div>
        <h1>NEW DATA from firestore database</h1>
        <ul>
            {firebaseData.map((item) => (
                <li key={item.id}>
                    {item.firstName}
                    <br></br>
                    {item.lastName}
                    <br></br>
                    {item.concentration}
                    <br></br>
                    {item.classYear}
                    <br></br>
                    {item.hometown}
                    <br></br>
                    {item.interests}
                    </li>
            ))}
        </ul>
    </div>
}