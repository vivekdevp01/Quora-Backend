const express= require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes')


const {PORT}=require('./config/serverConfig');

const connectToDB=require('./config/db.config');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/api', apiRouter);

app.listen(PORT,async ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    await connectToDB();
    console.log('Connected to the database');
})