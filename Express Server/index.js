import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to MY WEBSITE");
});
app.post('/register', (req, res) => {
    res.sendStatus(201);
});
app.put('/user/me', (req, res) => {
    res.sendStatus(200);
});
app.patch('/user/me', (req, res) => {
    res.sendStatus(200);
});
app.delete('/user/me', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`you are running port ${port}.`);
});