import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ILoveYou";

app.use(bodyParser.urlencoded({extended:true}));

app.post('/submit', (req, res) => {
    console.log(req.body['password']);
    var inputPassword = req.body['password'];
    if (inputPassword == password){
        res.sendFile(__dirname + "/secret.html");
    }
    else{
        res.sendFile(__dirname + "/index.html");
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});