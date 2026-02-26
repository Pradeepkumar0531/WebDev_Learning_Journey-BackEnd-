import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', async (req, res) => {
   try{
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", {data :response.data});
   } catch(error){
    console.log("Failed to Fetch message",error.message);
    res.render("index.ejs", {error : error.message});
   }
});

app.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const type = req.body.type;
        const participants = req.body.participants;
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
        const result = response.data;
        res.render("index.ejs", {data : result[Math.floor(Math.random() * result.length)]});
    }catch(error){
        console.log("Unable to fetch the request", error.message);
        res.render("index.ejs", {error : "Sorry, No activities found with your requirements"});
    }
});

app.listen(port, () => {
    console.log(`Server is Running on port ${port}.`);
});