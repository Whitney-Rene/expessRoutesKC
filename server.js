import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";

const app = express();

app.use(cors());
const __dirname = path.resolve(); //this lets express know the dir we are working in
console.log(__dirname); ///Users/tpl1122_12/Documents/Techtonica/expressRoutesKC

const PORT = process.env.PORT || 1986;

app.get('/', (req, res) => {
    //creates path to index.html (in this dir I should have a file named index.html, use that file as the response)
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.send("You are visiting my SERVER!") *only sends a string
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contactMe', (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
})

//important to use app.use
//IS THE POSITION OF THIS ROUTE IMPORTANT?  SHOULD IT BE LAST?
app.use('*', (req,res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '404.html'));
})

app.listen(PORT, () => {
    console.log(`Welcome. Server is running on port ${PORT}`)
});