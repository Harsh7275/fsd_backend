const fs=require('fs');


fs.mkdir("mkdir",(err)=>{
  if(err)
     console.log('Error creating directory:',err);
  else
  console.log("directroy created");
})