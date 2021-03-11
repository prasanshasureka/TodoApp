const Todo = require('../models/todoList');


module.exports.delete = function(req, res){
    console.log(req.query);
    console.log(Object.keys(req.query));
    var task_id = Object.keys(req.query);
    for (id of task_id){
        Todo.findByIdAndDelete(id, function(err){
            if (err){
                console.log('Error in deleting task');
                return;
            }
        });
    }
    return res.redirect('back');
}

module.exports.home = function(req, res){
    Todo.find({}, function(err, task){
        if (err){
            console.log('Error in fetching task list');
            return;
        }
        return res.render('home', {
            title: "My TODO List",
            taskList: task
        });
    });
    // return res.render('home', {
    //     title: 'TODO List App',
    //     taskList: Todo
    // })
}