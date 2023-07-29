const express = require("express");
const morgan = require("morgan");
// const cookieparser = require("cookie-parser");
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const HASH_SALT = 10;
const generatedSalt = bcrypt.genSaltSync(HASH_SALT);

const app = express();

const port = 8080; 
let currentId = 4;

// Create a database of users that can login to our website and view their profile page
// Users should be able to logout and be redirected to the login screen

const users = {
    1: {
        id: 1,
        email: "puppycat@hotmail.com",
        password: "$2b$10$DHT66IXZRUYsPkx0ReWTKu47wOKhLORIxoIWYpPIdgQAscR9LtLCu" //ImNotCute
    },
    2: {
        id: 2,
        email: "lighthouseAssignments@hotmail.com",
        password: "$2b$10$s4astxxmFenD1lFDybpEF.cjASjQKFSgO6/o1FTgH5aqqYYFvVfKe" //veryDifficult
    },
    3: {
        id: 3,
        email: "homersimpson@hotmail.com",
        password: "$2b$10$WZK1y2gd8oVn9dkKafXtNeXrq9f/dfeR2oQGRYzleJZximobD8qyC" //d0h!
    }
}

const cookieSessionConfig = {
    name: 'myCookieSession',
    keys: ['this-is-secret'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
};

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
//app.use(cookieparser())
app.use(cookieSession(cookieSessionConfig));

// View engine
app.set("view engine", "ejs");

// Get routes
app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/login', (req, res) =>{
    res.render('login');
});

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.get('/profile', (req, res) =>{
    //console.log("cookie value", req.cookies.user_id)
    //console.log("user object retrived with the cookie value",users[req.cookies.user_id]);
    //const objectOfUserThatIsLoggedIn = users[req.cookies.user_id];
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    else{
        const objectOfUserThatIsLoggedIn = users[req.session.user_id];
        const templateVars = {user: objectOfUserThatIsLoggedIn}
        console.log(templateVars);
        res.render('profile', templateVars);
    }
});

// Post routes
app.post('/login', (req, res) => {
    console.log(req.body);
    const usernameFromWebsite = req.body.email;
    const passwordFromWebsite = req.body.password;
    // check the user information
    for(let key in users) {
        // check if it exists and then if it matches
        if(users[key].email === usernameFromWebsite && bcrypt.compareSync(passwordFromWebsite, users[key].password)){
            //res.cookie('user_id', users[key].id);
            req.session.user_id = users[key].id;
            console.log(req.session);
            return res.redirect('/profile');
        }
    }
    res.status(400).send('Username or password is incorrect');
});

app.post('/registration', (req, res) => {
    const usernameFromWebsite = req.body.email;
    const passwordFromWebsite = req.body.password;
    const hashedPassword = bcrypt.hashSync(passwordFromWebsite, generatedSalt);

    const newUser = {
        id : currentId,
        email : usernameFromWebsite,
        password : hashedPassword
    };

    users[currentId] = newUser;

    currentId ++;
    console.log(users);
    return res.redirect('/login');

});

app.post('/logout', (req,res)=>{
    //res.clearCookie('user_id');
    req.session = null
    res.redirect('/login');
});

// Check if the sever is listening
app.listen(port, ()=>{
    console.log("Hey, this server actually works! :)")
});

