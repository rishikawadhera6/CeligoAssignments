const xml2json = require('xml2json')
const fs = require('fs')
const util = require('util')

const getJson = (path,options={})=>{
   
     fs.readFile(path,'utf8',(err,content)=>{
        if(err){
            console.log(err);
            return;
        }
    
        console.log(util.inspect(xml2json.toJson(content,options),false,null,true));
     })
    
}

getJson('xmlfile.xml',{sanitize:true,object:true});