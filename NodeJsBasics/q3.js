const fs = require('fs')
const request = require('request');
//a. using request package and fs module
request('http://www.google.com',(err,response,body)=>{
       if(err) return err;

       fs.writeFile('googlepage.html',`${body}`,'utf8',(err)=>{
           if(err)
           return err;

           console.log("downloaded source page");
       });
});

//b. Using stream and event
const fileStream = fs.createWriteStream('googleStreamFile.html');
request('http://www.google.com')
.pipe(fileStream)
.on('finish', ()=>{
     console.log("file downloaded successfully through stream");
})
.on('error',(err)=>{
    console.log(`file could not download -> ${err}`);
})
