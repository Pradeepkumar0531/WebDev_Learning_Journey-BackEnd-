const fs = require("fs");

// fs.writeFile("firstFile.txt","Hello, NodeJS",(err)=>{
//     if (err) throw err;
//     console.log("The file is saved");
// });

fs.readFile("firstFile.txt", 'utf8' ,(err,data)=>{
    if (err) throw err;
    console.log(data);
});