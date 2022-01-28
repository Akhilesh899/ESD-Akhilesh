const express = require('express');
const mongooose = require('mongoose');

const app = express();

mongooose.connect('mongodb://ded:ded@cluster0-shard-00-00.f9hq1.mongodb.net:27017,cluster0-shard-00-01.f9hq1.mongodb.net:27017,cluster0-shard-00-02.f9hq1.mongodb.net:27017/ded?ssl=true&replicaSet=atlas-6bc41c-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require('./routes/index.js'));
app.use(require('./routes/todo'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening on port: 3000");
});
