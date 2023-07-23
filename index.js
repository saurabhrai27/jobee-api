const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({path : './config/config.env'});

const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})