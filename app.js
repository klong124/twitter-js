const express = require('express');
const nunjucks = require('nunjucks');
const twitterApp = express();
const path = require('path');

const locals = {
    title: 'Puppies \'R Us',

};

const dogs = [
    {name: 'Daisy'},
    {name: 'Lily'},
    {name: 'Toby'}
];

twitterApp.set('view engine', 'html');
twitterApp.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache:true});

// nunjucks.render('index.html', locals, function (err, output) {
//     twitterApp.use('/template', function(req, res) {
//         res.send(output)
//     });
//     console.log(output);
// });


twitterApp.listen(3000, function ()
{
    console.log("Hey!  We're connected!");
});

twitterApp.use(function (req, res, next)
{
    console.log(req.method, req.originalUrl, res.statusCode);
    next();
});

twitterApp.get("/", function (req, res)
{
    res.send("My Dog Is AWESOME")
});

twitterApp.use("/special", function (req, res, next)
{
    console.log("You're special");
    next();
});

twitterApp.get('/template', function(req, res) {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index', {title: 'Best Friends', dogs:dogs})
});

// twitterApp.use(function (req, res)
// {
//     res.send("You are nowhere");
// })


