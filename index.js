
const express = require ('express');
const path = require('path');

const app = express();
const dirPath = (path.join(__dirname, 'public'));

app.use(express.static(dirPath));

app.listen(4500);



// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     console.log(req.query);
//     res.send("<h1>Hello, This is Home Page</h1>");

// })

// app.get('/about', (req, res) => {
//     res.send(`<input type='text' placeholder='Enter Your Name' />`);
// })
// app.get('/contact', (req, res) => {
//     res.send({
//         name: 'kempi'
//     });
// })

// app.listen(4500);



// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// const filePath = `${dirPath}/apple.txt)`;

// fs.writeFileSync(filePath,"This is a simple text file");

// fs.readFile(filePath, 'utf8', (err,item) => {
//     console.log(item)
// });

// fs.appendFile(filePath, ', and file name is apple.txt', (err, item) => {
//     if(!err){
//         console.log('file is updated');
//     }
// });

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=> {
//     if(!err){
//         console.log("file name is updated");
//     }
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)




