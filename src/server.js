const express = require('express');
const bodyParser = require('body-parser');
const lepayaCourseRouter = require('./routes/lepayaCourses');
const APIError = require('./middleware/error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', lepayaCourseRouter);

app.use((err, req, res, next) => {
  if (err instanceof APIError) {
    res.status(err.httpStatusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(8080);
