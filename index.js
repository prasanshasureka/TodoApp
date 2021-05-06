const express = require('express');

const db = require('./config/mongoose');
const Todo = require('./models/todoList');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded());
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('assets'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running server on port: ${port}`);
    }
    console.log(`Server is running on port: ${port}`);
});

