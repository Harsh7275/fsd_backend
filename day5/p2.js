// npm init -y
// npm i express 

const express=require('express');

const app = express();
app.use(express.json())
let users=[

       { id:1,name:'jane doe',age:30},
       { id:2,name:'jane doe',age:25},
       { id:3,name:'jane doe',age:35}
    
]

app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/users',(req,res)=>{
  
  const {username,password}=req.body;
  console.log(`user ${username} and password ${password} received`)
    res.json({message:"data received"});
})

app.post('/reg',(req,res)=>{
  
  const newuser=req.body;
  const newid=users.length>0?users[users.length-1].id+1:1;
  newuser.id=newid;
  users.push(newuser);
  res.json(newuser);
})
app.listen(9000,()=>{
    console.log('server is running on port 9000');
});
