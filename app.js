const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/todolist', (req, res) => res.send('This is the all to-do list api'));

app.listen(app.get('port'), () => console.log(`Express server listening on port ${app.get('port')}...`));