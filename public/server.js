
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB connection URI
const uri = 'mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority';

// Database and collection names
const dbName = 'reviewsDB';
const collectionName = 'reviews';

let db, reviewsCollection;

// Middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Root route handler
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle review submissions
app.post('/submitReview', async (req, res) => {
  const { name, rating, review } = req.body;
  if (name && rating && review) {
    try {
      await reviewsCollection.insertOne({ name, rating, review });
      res.status(200).send({ message: 'Review submitted successfully!' });
    } catch (error) {
      res.status(500).send({ message: 'Error submitting review!' });
    }
  } else {
    res.status(400).send({ message: 'All fields are required!' });
  }
});

// Endpoint to get all reviews
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await reviewsCollection.find({}).toArray();
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving reviews!' });
  }
});

// Connect to MongoDB and start the server
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    reviewsCollection = db.collection(collectionName);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
