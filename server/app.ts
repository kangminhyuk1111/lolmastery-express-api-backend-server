import express, { Request, Response } from "express";

const app = express();
const PORT: 4000|5000|6000 = 5000

type Data = {
    name: string;
    age: number;
    url: string;
};

const sendData: Data = {
    name: "name",
    age: 3,
    url: "tistory.com",
};

app.get("/",(req:Request, res: Response) => {
    res.send("hello world")
});
app.get("/get", (req: Request, res: Response) => {
    res.send(sendData);
});

app.listen(PORT,() => {
    console.log(`APP IS RUNNING ON ${PORT}`)
})