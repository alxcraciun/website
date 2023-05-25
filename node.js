const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static('.'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submit', (req, res) => {
    res.send('GET REQUEST');
});

app.post('/submit', (req, res) => {
    const email = req.body.email;
    console.log(email);
    res.redirect('/');
});

app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Unable to read data');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.get('/login', (req, res) => {
    req.session.user = req.body.username;
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).redirect('https://http.cat/404');
});

app.listen(3000, () => console.log('Server is running on port 3000'));

// https://api.unsplash.com/search/?client_id={UNSPLASH_API_KEY}&query=desk%20setup