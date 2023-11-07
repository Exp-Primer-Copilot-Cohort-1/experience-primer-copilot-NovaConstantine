//create web server
const express = require('express');
const app = express();

//importing file
const comments = require('./comments.json');
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

//creating server
app.listen(3000, () => {
    console.log('Server is running...');
});

//GET request
app.get('/comments', (req, res) => {
    res.json(comments);
});

//POST request
app.post('/comments', (req, res) => {
    //get the data from client
    const comment = req.body;
    //add the data to json
    comments.push(comment);
    //send the updated json to client
    res.json(comment);
});

//PUT request
app.put('/comments/:id', (req, res) => {
    //get the id from client
    const id = req.params.id;
    //get the data from client
    const comment = req.body;
    //update the data in json
    comments[id] = comment;
    //send the updated json to client
    res.json(comment);
});

//DELETE request
app.delete('/comments/:id', (req, res) => {
    //get the id from client
    const id = req.params.id;
    //delete the data from json
    comments.splice(id, 1);
    //send the updated json to client
    res.json(comments);
});