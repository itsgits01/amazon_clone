//creating api
//get,put,post,delete,update

//import from the package
const express= require('express');
const mongoose= require('mongoose');

const cors = require('cors');
//imports from the files
const authRouter= require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//intialistn
const PORT=process.env.PORT || 3000;
const app= express();
const DB="mongodb+srv://gitesh:gitesh123@cluster0.q5r7agp.mongodb.net/?retryWrites=true&w=majority";

//middle ware in client->server->client
app.get('/', (req,res)=>{
    res.send({
        api:"success"
    })
})
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

mongoose.connect(DB).then(()=>{
    console.log('connection to DB successful')
}).catch((e)=>{
    console.log(e);
});

// app.get('/hello-world',(req, res)=>{
//     res.json({hi:'hello from app.get'})
// });
// app.get('/myname',(req,res)=>{
//     res.json({name:'Gitesh K. Ambre'}) 
// });
 
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at port ${PORT}`);
});
  