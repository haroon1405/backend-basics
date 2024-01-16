import bodyParser from "body-parser";
import express from "express"

const app = express()
const port = 3000;

app.get('/',(req,res)=>[
    res.render('index.ejs', {name:'Haroon',age:18})
])

app.listen(port,()=>{
    console.log(`server is listening at Port-${port}`)
})