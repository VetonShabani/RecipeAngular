// import {Recipe} from "../src/app/recipes/recipe.model";

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Recipe = require('./models/recipe');

// TBUqxPsRIPt3NdON - Atlas Cluster Password
const app = express();

mongoose.connect('mongodb+srv://Veton:TBUqxPsRIPt3NdON@cluster0-wgpzn.mongodb.net/node-angular?retryWrites=true&w=majority')
  .then( ()=>{
    console.log('Connect to database!')
  })
  .catch( ()=>{
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts",(req,res,next) =>{
  const recipe = new Recipe({
    name : req.body.name,
    description: req.body.description
  });
  console.log(recipe);
  recipe.save().then(createdRecipe => {
    res.status(201).json({
      message: "Recipe added",
      postId: createdRecipe._id
    });
  });
});

app.get('/api/posts',(req,res,next)=> {

  Recipe.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched successfully',
      recipes: documents
    });
  });
});

app.delete("/api/posts/:id",(req,res,next)=>{
  Recipe.deleteOne({_id: req.params.id}).then(result =>{
    console.log(result);
    res.status(200).json({message: 'Recipe deleted'});
  });
});


module.exports = app;


