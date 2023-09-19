const express=require('express')
const bodyparser=require('body-parser');
const { message } = require('statuses');
const app=express();
const port=3000
app.use(bodyparser.json())
app.get('/',(req,res)=>{
    res.send('Hello!');
});
app.post('/api',(req,res)=>{
    const jsondata=req.body; 
    console.log('Received the JSON data:',jsondata);
    res.send(JSON.stringify({message:"json data received successfully",data:jsondata}));
}); 
app.put('/api',(req,res)=>{
    const jsondata=req.body;
    console.log('Received put data',jsondata);
    res.send(JSON.stringify({message:'put request received successfully and json data updated',data:jsondata}));
});
app.delete('/api',(req,res)=>{ 
    const jsondata=req.body;
    res.send(JSON.stringify({message:'delete request received and json data deleted successfully',data:jsondata}));
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});