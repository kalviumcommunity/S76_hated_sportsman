


require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.DB_URL;
if (!mongoURI) {
  console.error("Error: Database URI is not defined. Check your .env file.");
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to the database"))
.catch(err => {
  console.error("Database connection failed:", err);
  process.exit(1);
});

app.get('/ping', (req, res)=>
    {
        res.send('Pong!');}
    );
app.get('/', (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
