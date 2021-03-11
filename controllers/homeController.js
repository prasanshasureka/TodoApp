const Todo = require('../models/todoList');
var month_abr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// var moment = require('moment');
// app.use((req, res, next)=>{
//     res.locals.moment = moment;
//     next();
// });

// exports.index = function(req, res) {
//     res.render('index', { moment: moment });
// }


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
            taskList: task,
            month_abr: month_abr
        });
    });
    // return res.render('home', {
    //     title: 'TODO List App',
    //     taskList: Todo
    // })
}