import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var brandname = "";

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

function brandnameCreating(req, res, next){
    console.log(req.body);
    brandname = req.body['Name'] + req.body['Password'];
    next();
}

app.use(brandnameCreating);

app.post('/submit', (req, res) => {
    res.send(`<h1> Your Brand Name is: </h1><h2> ${brandname}`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});