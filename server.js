const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Import routes
const testimonialRoutes = require('./routes/testimonials');

// Use routes
app.use('/api/testimonials', testimonialRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');

        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running...');
        });
    })
    .catch((err) => {
        console.log(err);
    });