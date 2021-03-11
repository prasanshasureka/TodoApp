const Todo = require('../models/todoList')

module.exports.addTask = function(req, res){
    // console.log(req.body.date.split('T')[0]);
    Todo.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category
    }, function(err, newTask){
        if (err){
            console.log('Error in creating Task');
            return;
        }
        console.log('******', newTask);
        res.redirect('back');
    })
    // return res.redirect('back');
}