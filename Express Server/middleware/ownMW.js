import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next){
    console.log("Request method " + req.method);
    console.log("URl method " + req.url);
    next(); // compulsory for an user defined middleware
}

app.use(logger);

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});