const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    res.send('<h1>Hello Express!<h1>');
});

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        welcomeMessage:'welcome'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle:'ABCD', 
        currentYear: new Date().getFullYear(),
        
    });
});


app.listen(3000, () => {console.log('Server Is Up On PORT 3000...')});