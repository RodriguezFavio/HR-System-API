const express = require('express');

const hrSystemRoutes = require('./routes/hrSystemRoutes');

const app = express();

app.use('/api', hrSystemRoutes);

app.listen(8080);
