import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

let courseList = [
    { code: "COIS1010", title: "Digital World" },
    { code: "COIS1020", title: "Intro to Programming" },
    { code: "COIS2020", title: "Data Structures" },
    { code: "COIS2430", title: "Web Dev I" },
    { code: "COIS3430", title: "Web Dev II" },
]

app.listen(3000, () => {
    console.log("listening on port 3000")
})
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home", { courseList })
})

app.get("/add", (req, res) => {
    res.render("add")
})

app.post("/add", (req, res) => {
    const { code, title } = req.body
    courseList.push({ code, title })
    res.redirect("/")
})
