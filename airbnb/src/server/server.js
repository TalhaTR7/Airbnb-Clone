const express = require('express');
const properties = require('property.json');

const app = express();
const PORT = 3000;

app.get('/api/property', (req, res) => {
    const fakeID = req.query.fakeid;
    const property = properties.find(p => p.fakeid === fakeID);
    res.json(property);
});


app.get('/api/booking', (req, res) => {
    const fakeID = req.query.fakeid;
    const property = properties.find(p => p.fakeid === fakeID);
    res.json(property);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
