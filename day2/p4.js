const fs=require('fs');


fs.unlink("./mkdir/data.txt",(err)=>{
  if(err)
     console.log(err);
  else
  console.log("File deleted");
})