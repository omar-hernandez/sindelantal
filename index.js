import express from 'express'

const app = express();

app.get('/', (req,res)=>{
    res.send('Server on 2')
});




app.listen(3003, ()=> console.log('server on 3003'));