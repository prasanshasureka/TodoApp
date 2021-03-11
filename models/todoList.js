const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
        type: String
    },
    category:{
        type: String
    },
    date:{
        type: Date
    }
})

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;