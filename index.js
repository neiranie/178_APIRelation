require('dotenv').config();

const express = require('express');
const app = express();

const routes = require('./routes/api');
const connectDatabase = require('./config/db');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});