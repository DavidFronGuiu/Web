const axios = require("axios");

const START_URL = "https://sandbox.oxylabs.io/products";

async function scrapePage(url){
    const response = await axios.get(url);
    console.log(response.data);
}

scrapePage(START_URL);