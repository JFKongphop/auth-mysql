const express = require('express');
const cors = require('cors');

const authRoutes = require('./router/auth')

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    return res.send('test api')
})

app.use('/api/auth/', authRoutes);


app.listen(8800, () => {
    console.log('running at port http://localhost:8800');
})