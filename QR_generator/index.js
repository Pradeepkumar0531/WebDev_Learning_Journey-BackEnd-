import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([{
    message:"Enter any URL to generate QRcode:",
    name : "URL"
}])
.then((answers)=>{
    var url = answers.URL ;
    var img = qr.image(url);
    fs.writeFile("qr_url.txt",url,(err)=>{
        if (err) throw err;
        console.log("file saved");
    })
    var qrcode = fs.createWriteStream("qrcode.png");
    img.pipe(qrcode);
});




