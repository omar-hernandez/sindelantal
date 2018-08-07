import express from 'express'
import parser from 'body-parser'
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3003
const mongoURI = process.env.MONGODB_URI || "mongodb://principalnegra:cintanegr4@ds113942.mlab.com:13942/sindelantal"


mongoose.connect(mongoURI,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',()=>console.log('Error al conectar a la BD'))
    .once('open',()=>console.log('Conectado a la BD'))

app.use(parser.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Server on sindelantal')
});

app.listen(PORT,()=>{
    console.log("server on" + PORT)
})

// app.listen(3003, ()=> console.log('server on 3003'));