import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    const date = new Date();
    const day = date.getDay();
    console.log(day);
    
    let daytype = "Week Day";
    let adv = "Let's work Hard";
    
    if (day == 0 || day == 6){
        daytype = "WeekEnd";
        adv = "Let's have Fun";
    }
    res.render("index",{
        dayType : daytype,
        advice : adv
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});