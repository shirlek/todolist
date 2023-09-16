import express from "express";
import bodyparser from "body-parser"

const app = express()
const port = 3000

const boom = ["helo", "this ", "fadif"];

const today = []
const office = []

app.use(express.static("public"));
app.use(bodyparser.urlencoded("extended:true"));

app.get("/", (req, res) => {
    res.render("main.ejs", {data : ""});
})

app.get("/today", (req, res) => {
    res.render("main.ejs", {data :{path: "today", info : today}});
})

app.get("/office", (req, res) => {
    res.render("main.ejs", {data :{path: "office", info : office}});
})

app.post("/today", (req, res) => {
    const data = req.body;
    today.push(data.text);
    res.render("main.ejs", {data :{ path: 'today', info : today}});
})

app.post("/office", (req, res) => {
    const data = req.body;
    office.push(data.text);
    res.render("main.ejs", {data :{path: 'office', info : office }});
})


app.listen(port, () => {
    console.log("The port is on...");
})