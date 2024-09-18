import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { db } from "./util/FirebaseInit.js";
import { collection, getDocs } from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json()); // app is our backend; it controls all requests coming in
app.use (
    cors({
        origin: "http://localhost:3000"
    })
);

app.get("/", async(req, res) => { // going to 8080 calls the backend through the browser
    res.send("backend working!");
});

app.get("/api/test", async (req, res) => {
    const testCollectionRef = collection(db, "test");
    const collectionSnap = await getDocs(testCollectionRef);
    const docs = [];
    collectionSnap.forEach( (doc) => {
        docs.push(doc.data());
    });
    res.send(docs);
})

app.get("/api/Basics", async (req, res) => {
    const newCollectionRef = collection(db, "Basics");
    const newCollectionSnap = await getDocs(newCollectionRef);
    const docs = [];
    newCollectionSnap.forEach( (doc) => {
        docs.push(doc.data());
    });
});

// STARTS THE PROGRAM
app.listen(port, () => { // listen for incoming traffic
    console.log("Listening on port ", port);
});
