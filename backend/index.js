require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require ('cors');


const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.POKEMON_API_KEY;
const POKEMON_API_URL = "https://api.pokemontcg.io/v2/cards";

app.get('/cards', async (req, res) => {

    try{
        const response = await axios.get(POKEMON_API_URL,{
            headers: {'X-Api-Key': API_KEY}
        });

        console.log("API Response:", response.data);
        res.json(response.data);
        
    } catch (error){
        res.status(500).json({ error: "Failed to fetch data"});
    }

});

const PORT = process.env.PORT || 5000;

app.listen (PORT, () => console.log(`Server running on port ${PORT}`));

