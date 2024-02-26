// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
    const jsonData = JSON.stringify(req.body, null, 2);
  
    fs.writeFile('data.json', jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error saving data to file:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      console.log('Data saved to data.json');
      // Send a JSON response indicating success
      res.status(200).json({ message: 'Data saved successfully' });
    });
  });
  
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
