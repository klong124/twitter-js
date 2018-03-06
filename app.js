const express = require('express');
const twitterApp = express();

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

twitterApp.use(function (req, res)
{
    res.send("You are nowhere");
})