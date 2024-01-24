const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDb")

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name : "Apple",
    rating : 7,
    review : "Great"
})

// fruit.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
    name: "haroon",
    age : 18
})


// person.save()

const person2 = new Person({
    name: "random2",
    age:12
})

const person3 = new Person({
    name: "random3",
    age:24
})

// Person.insertMany([person2,person3])

Fruit.find({})
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  });



Person.find({name:"haroon"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

const animalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please give animal name"]
    },
    color: String,
    age: {
        type: Number,
        max: [50,"Age should be less than 50"]
    }
})

const Animal = mongoose.model("Animal", animalSchema)

const tiger = new Animal({
    name: "Tig",
    color:"Green",
    age: 45
})

const cow = new Animal({
    name: "wembley",
    color:"white",
    age:23
})

// Animal.insertMany([tiger,cow])

Animal.updateOne({ name: "Tig" }, { $set: { color: "orange" } })
.then(result => {
    console.log("Updated", result);
  })
  .catch(error => {
    console.log(error);
  });;
  
Person.deleteOne({name:"random3"})
.then(result => {
    console.log("deleted", result);
  })
  .catch(error => {
    console.log(error);
  });;

Animal.find({name:"Tig"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})