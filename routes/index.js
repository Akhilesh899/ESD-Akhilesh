const router = require('express').Router();
const Todo = require('../models/Todo');


router.get('/', async (req, res) => {
    const tasks = await Todo.find();

    res.render("index", { todo: tasks, message: 'none' });
});

router.get('/add', async (req, res) => {
    const tasks = await Todo.find();

    res.render("index", { todo: tasks, message: 'add' });
});

router.get('/delete', async (req, res) => {
    const tasks = await Todo.find();

    res.render("index", { todo: tasks, message: 'delete' });
});

router.get('/update', async (req, res) => {
    const tasks = await Todo.find();

    res.render("index", { todo: tasks, message: 'update' });
});


module.exports = router;
