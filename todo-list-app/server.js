// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8001;

// MongoDB connection
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', require('./routes/tasks'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
