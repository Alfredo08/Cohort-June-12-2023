const express = require('express');
const cookieSession = require('cookie-session');
const PORT = 8000;

const app = express();

const cookieSessionConfig = {
    name: 'myCookieSession',
    keys: ['this-is-secret'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
};

app.use(cookieSession(cookieSessionConfig));

app.get('/cookie-session', (req, res) => {
    console.log("Session:", req.session);
    req.session.username = "alex@miller.com";
    if(!req.session.visited){
        req.session.visited = 1;
    }
    else{
        req.session.visited ++;
    }
    console.log("Session:", req.session);
    res.end(`<h1> This page has been visited ${req.session.visited} times!`);

});

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});





