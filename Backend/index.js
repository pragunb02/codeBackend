// const express=require('express');  SYNCHRONOUS JS
import express from 'express';

const app=express();

const port=process.env.PORT || 3000;

app.use(express.static('dist'))  // dist folder vite build

// app.get('/',(req,res)          =>{
//      res.send('Server is Ready (home)');
// });
// GET A LIST OF 5 JOKES
app.get('/api/jokes',(req,res)=>{   // like api (api array , json object)
    // array of jokes each have objects
    const jokes=[
        {
            id:1,
            title:'A first Joke',
            content:'This is a first joke'
        },
        {
            id:2,
            title:'A second Joke',
            content:'This is a second joke'
        },
        {
            id:3,
            title:'A third Joke',
            content:'This is a third joke'
        },
        {
            id:4,
            title:'A fourth Joke',
            content:'This is a fourth joke'
        },
        {
            id:5,
            title:'A fifth Joke',
            content:'This is a fifth joke'
        }
    ];
    res.send(jokes);
});
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});