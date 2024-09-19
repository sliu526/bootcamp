"use client";
import { useEffect, useState } from "react";

export default function FetchMoreData() {
    const [firebaseData, setFirebaseData] = useState([]); 

    useEffect(() => {
        const fetchMoreData = async() => {
            try {
                const response = await fetch("/basics");
                const result = await response.json(); // turns response into a json, can also do into a string
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