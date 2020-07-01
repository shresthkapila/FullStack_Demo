const express = require('express')
const path = require('path')
var cors = require('cors') //cross-origin resource sharing
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:Munish@1998@localhost/users'
})

var app = express();

app.use(express.json());
app.use("/", cors());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('pages/index'));
app.get('/database', (req,res) => {
  var getUsersQuery = `SELECT * FROM usr`
  pool.query(getUsersQuery, (error,result) => {
    if (error) {
      res.end(error);
    }
    var results = {'rows': result.rows}
    res.render('pages/db',results);
  })
});
app.post('/adduser',(req,res)=>{
  console.log("post request for /adduser");
  var uname = req.body.uname;
  var age = req.body.age;
  adduser_query = `...`; // `INSERT INTO usr (fname,age) VALUES ('${uname}', ${age})`;
  pool.query(adduser_query, (error,results)=> {
    us = [];
    ob = {'n': uname, 'a': age};
    us.push(ob);
    res.json(us);
  });
  // res.send(`username: ${uname}, age: ${age}`);
});
app.get('/users/:id', (req,res)=> {
  var uid = req.params.id
  console.log(req.params.id);
  // search the database using uid
  res.send("got it");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;