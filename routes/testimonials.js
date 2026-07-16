const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials
// GET /api/testimonials

router.get('/', async (req, res) => {
    let { limit = 10, minRating } = req.query;

    // Maximum number of testimonials to return
    limit = Math.min(Number(limit) || 10, 20);

    const filter = {};

    // Filter by minimum rating if provided
    if (minRating) {
        filter.rating = { $gte: Number(minRating) };
    }

    try {
        const testimonials = await Testimonial.find(filter)
            .select('fullName message rating createdAt')
            .sort({ createdAt: -1 })
            .limit(limit);

        res.status(200).json(testimonials);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            error: 'Failed to fetch testimonials.'
        });
    }
});

//Get one testimonial 
// GET /api/testimonials/:id

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid testimonial ID.'
        });
    }

    try {

        const testimonial = await Testimonial.findById(id);

        if (!testimonial) {
            return res.status(404).json({
                error: 'Testimonial not found.'
            });
        }

        res.status(200).json(testimonial);

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            error: 'Server error.'
        });

    }

});

// POST a testimonial
// POST /api/testimonials

router.post('/', async (req, res) => {

    const { fullName, email, message, rating } = req.body;

    // Check required fields
    if (!fullName || !email || !message) {
        return res.status(400).json({
            error: 'Full name, email and message are required.'
        });
    }

    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({
            error: 'Please enter a valid email address.'
        });
    }

    // Validate rating
    if (rating && (rating < 1 || rating > 5)) {
        return res.status(400).json({
            error: 'Rating must be between 1 and 5.'
        });
    }

    try {
        const testimonial = await Testimonial.create({
            fullName,
            email,
            message,
            rating
        });

        res.status(201).json({
            message: 'Testimonial submitted successfully.',
            testimonial
        });

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            error: 'Failed to create testimonial.'
        });

    }

});

module.exports = router;