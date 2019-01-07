const express = require ('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser')
const register=require('./routing/register')
const guest = require('./routing/guest')
const cors = require('cors')
const signing = require('./routing/signing')
const short = require('./routing/short')
const tracking = require('./routing/tracking')
app.use(bodyParser.json());
app.use(cors());

app.use('/register',register)
app.use('/signing',signing)
app.use('/short',short)
app.use('/tracking',tracking)
app.use('/', guest)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))