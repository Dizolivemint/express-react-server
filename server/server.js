require('../config/config');
const express = require('express');
const {ObjectID} = require('mongodb');
const helmet = require('helmet');

var {mongoose} = require('../db/mongoose');
var {User} = require('../models/user');
require('../services/passport');

const app = express();
const port = process.env.PORT;

require('../routes/auth')(app);

app.listen(port, () => {
    console.log(`Server is up at ${port}`);
  });
  





