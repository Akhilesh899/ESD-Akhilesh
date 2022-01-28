const router = require('express').Router();
const Todo = require('../models/Todo');

router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const NewTodo = new Todo({todo: todo});
    NewTodo.save()
    .then(() => {
        console.log("Successfully added todo task."),
        res.redirect('/add');
    })
    .catch(err => console.log(err));
});

router.post('/update/todo/:_id', async (req, res) => {
    const { updateTodo } = req.body;
    const { _id } = req.params;
    Todo.updateOne( { _id: _id}, {$set: { todo: updateTodo }})
    .then(() => {
        console.log("Task Updated Successfully.");
        res.redirect('/update');
    })
})

.get('/delete/todo/:_id', (req, res) => {
    const {_id} = req.params;
    Todo.deleteOne({ _id })
    .then(() => {
        console.log("Task deleted successfully."),
        res.redirect('/delete');
    })
    .catch((err) => console.log(err));
})

.get('/update/:_id', async (req, res) => {
    const { _id } = req.params;
    const task = await Todo.findOne( { _id });
    res.render("update", { todo: task });
});



module.exports = router