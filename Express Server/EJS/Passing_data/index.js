import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))



app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submit', (req, res) => {
    const letters = req.body['fname'].length + req.body['lname'].length;
    res.render('index.ejs',{len : letters});
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});