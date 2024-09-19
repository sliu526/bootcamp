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

app.get("/test", async (req, res) => {
    console.log("getting data from test collection");
    const testCollectionRef = collection(db, "test");
    const collectionSnap = await getDocs(testCollectionRef);
    const docs = [];
    collectionSnap.forEach( (doc) => {
        docs.push(doc.data());
    });
    res.send(docs);
})

app.post("/test", async (req, res) => {
    const testRef = collection(db, "test");
    const testBody = req.body;
    try {
        await addDoc(testRef, testBody)
    } catch (e) {
        console.error(e);
        res.status(500);
    }
    res.status(200).send("correctly conducted the test")
})

app.get("/basics", async (req, res) => {
    console.log("getting data from Basics collection");
    const newCollectionRef = collection(db, "basics");
    const newCollectionSnap = await getDocs(newCollectionRef);
    const newDocs = [];
    newCollectionSnap.forEach( (doc) => {
        newDocs.push(doc.data());
    });
});

// STARTS THE PROGRAM

app.listen(port, () => { // listen for incoming traffic
    console.log("Listening on port ", port);
});