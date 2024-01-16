import express from "express"; 
import bodyParser from "body-parser";
import { dirname } from "path";                        
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); 

let text = "";

function generateText(req,res,next){
    text = `Your name is ${req.body.name} and age is ${req.body.age}`;
    next();
}

app.use(generateText)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/login',(req,res)=>{
    res.send(text)
})

app.listen(port,()=>{
    console.log(`Listening at Port-${port}`)
})