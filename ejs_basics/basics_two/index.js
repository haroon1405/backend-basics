import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); 

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/login',(req,res)=>{
    res.render('index.ejs',{ name: req.body.name, age: req.body.age })
})

app.listen(port,()=>{
    console.log(`Server is listening at Port-${port}`)
})
