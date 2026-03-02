import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUserName = "FanOfAngela";
const yourPassword = "WeLOVEYou";
const yourAPIkey = "KeyofAPI";
const yourBearerToken = "TOKEN";


app.get('/', (req, res) => {
    res.render('index.ejs', {content : "API response."});
});

app.get('/noAuth', async (req, res) => {
    try {
        const result = await axios.get(API_URL + "random");
        console.log(result.data)
        const response = JSON.stringify(result.data);
        res.render("index.ejs", {content : response});
    }catch(error){
        res.status(404).send("Error", error.message);
    }
    
});

app.get('/basicAuth', async (req, res) => {
    try{
        const result = await axios.get(API_URL + "all?page=2",{
            auth:{
                username : yourUserName,
                password : yourPassword
            }
        });
        res.render('index.ejs', {content : JSON.stringify(result.data)});
    }catch(error){
        res.status(404).send("Error", error.message);
    }
});

app.get('/apiKey', async (req, res) => {
    try{
        const result = await axios.get(API_URL + "filter",{
            params:{
                score: 5,
                apiKey: yourAPIkey
            }
        });
        res.render("index.ejs", {content : JSON.stringify(result.data)});
    }catch(error){
        res.status(404).send("Error", error.message);
    }
});

const config = {
    headers : {Authorization : `Bearer ${yourBearerToken}`}
};

app.get('/bearerToken', async (req, res) =>{
    try{
        const result = await axios.get(API_URL + "secrets/2", config);
        res.render("index.ejs", {content : result.data});
    }catch(error){
        res.status(404).send("Error", error.message);
    }
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`);
});