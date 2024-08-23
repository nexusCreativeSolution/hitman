const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Define a review schema
const reviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    message: String
});

const Review = mongoose.model('Review', reviewSchema);

// Endpoint to handle review submission
app.post('/submit-review', async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving review:', error);
        res.json({ success: false });
    }
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
