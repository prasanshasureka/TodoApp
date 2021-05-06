const express = require('express');

const db = require('./config/mongoose');
const Todo = require('./models/todoList');
const app = express();
// const port = process.env.PORT || 8000;

app.use(express.urlencoded());
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('assets'));


// app.listen(process.env.PORT || 8000, function(err){
//     if (err){
//         console.log(`Error in running server on port: ${port}`);
//     }
//     console.log(`Server is running on port: ${port}`);
// });

app.listen(process.env.PORT || 8000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });