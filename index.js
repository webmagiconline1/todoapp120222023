const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', function(req, res) {
  res.render('index', { tasks: tasks });
});

app.post('/', function(req, res) {
  let task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.post('/complete', function(req, res) {
  let task = req.body.task;
  tasks = tasks.filter(function(t) {
    return t !== task;
  });
  res.redirect('/');
});

app.listen(port, function() {
  console.log(`To-Do List app listening at http://localhost:${port}`);
});
