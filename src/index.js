const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json()); // Allow JSON data
app.use(cors()); // Allow requests from any domain

// Example API Endpoint: Get Player Stats
app.get('/api/playerStats', (req, res) => {
    res.json({
        playerName: "Akif",
        score: 5000,
        rank: "Gold"
    });
});

// Example API Endpoint: Save Score
app.post('/api/saveScore', (req, res) => {
    const { playerId, score } = req.body;
    console.log(`Received score: Player ${playerId} scored ${score}`);
    res.json({ success: true, message: "Score saved!" });
});

// Start the API server on port 3000
app.listen(3000, () => console.log("API is running on http://localhost:3000"));