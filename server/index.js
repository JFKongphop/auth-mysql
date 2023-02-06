const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./router/auth')


const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    return res.send('hello world')
})

app.use('/api/auth/', authRoutes);

// app.post('/api/auth/register', (req, res) => {
//     // console.log(req.body.username);
//     return res.status(200).send('pass', req.body.username)
// })

// app.post("/book", (req ,res)=>{
    
//     // get name and author
//     let name = req.body.name;
//     let author = req.body.author;

//     console.log(name, author);
// })



app.listen(8800, () => {
    console.log('running at port http://localhost:8800');
})