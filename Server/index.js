const express = require ('express');
const bodyParser = require('body-parser')
const app = express();
const mysql=require('mysql');
const cors = require('cors')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'project_class'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/get',(req,res)=>{
    const sqlSelect = 
    "SELECT * FROM main_class";
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});


// app.post("/api/insert",(req,res)=>{

//     const movieName = req.body.movieName
//     const movieReview = req.body.movieReview

//     const sqlInsert = 
//     "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
//     db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
//         console.log(result);
//     });
// });

app.listen(3001,()=>{
    console.log("running on port 3001")
})