const fs=require('fs');


fs.rmdir("mkdir",(e)=>{
  if(e){
     console.error('Error deleting directory:',e);
    return;
  }
  else
  console.log("directroy deleted successfully!");
})