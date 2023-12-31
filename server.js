const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// mongodb connect & start
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        })
    })
    .catch((err) => console.log(err));