// create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const comments = [
    { username: 'Tom', content: 'Hello World!', created_at: '2018-10-15T16:00:00.000Z' },
    { username: 'Bob', content: 'Nice to meet you!', created_at: '2018-10-16T16:00:00.000Z' },
];

// GET /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    // req.body
    comments.unshift({
        username: req.body.username,
        content: req.body.content,
        created_at: new Date(),
    });
    res.send(comments);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    // req.params
    comments.splice(req.params.id, 1);
    res.send(comments);
});

app.listen(port, () => console.log(`app listening on port ${port}!`));