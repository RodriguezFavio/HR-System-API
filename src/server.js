const express = require('express');
const bodyParser = require('body-parser');
const lepayaCourseRouter = require('./routes/lepayaCourses');
const { errorMiddleware } = require('./middleware/error');
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

app.use(errorMiddleware);

app.listen(8080);
