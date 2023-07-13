
// importing the express

import express from 'express';

import cors from 'cors';

import bodyParser from 'body-parser';

// importing the connection function which is built in db.js for connecting  database to this file with the help of mongoose

import Connection from './database/db.js'; // yha pe db k aage extension hona zaroori hai vrna error aayegi

import Routes from './routes/route.js';

// initialising express as a function in app variable

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', Routes);

const PORT = 8000;

// calling connection function made in db.js
Connection();

//making a server of express with the help of listen function
// it takes two arguments first is the port number and second is a call back function 
// call back function jo bhi kuch hm krna chahte server strt hote hi vo krta haii....

app.listen(PORT , () => console.log(`your server is running successfully on PORT ${PORT}`));


// server start krne se pehle package.json me scripts me "start": "node index.js" ye likhenge jisse sbse pehle ye file server pe run  krgi
// jn hm apna server start upr vali line print hogii or server k run hote tym agr hm koi bhi upr vali line me 
//chnge krte to vo 
// neeche terminal ,me reflect ni hogaa......jb tk hm frse srver ko start ni krte (server npm start se start hotaa)
// to iske liye nodeman ko install krna padhta hai ki realtym me server me change s kr de
// iske baad scripts k andr start me node ki jgh nodemon a jayega




