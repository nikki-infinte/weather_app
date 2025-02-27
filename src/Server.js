require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const API_KEY = "cb7bad51019962e238f33bd9892bc09b";

app.get("/api/weather", async (req, res) => {
    try {
        const { city } = req.query;
        if (!city) return res.status(400).json({ error: "City is required" });

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await axios.get(url);

        // Log the complete weather data before sending it to the frontend
        console.log("Weather Data Received:", JSON.stringify(response.data, null, 2));

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
