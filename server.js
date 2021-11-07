////////////////////////////////////////////////////
//Author:       Irfan Arslan                       /
//Date:         07/11/2021                         /
// Update Time:                                    /
////////////////////////////////////////////////////

const express = require('express');
const app = express();
const db = require('./config/db');
//Init Middleware
app.use(express.json({ extended: false }));

//Connect MongoDB
db();

//Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/reference', require('./routes/reference'));
app.use('/api/blog', require('./routes/blog'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server Connected'));
