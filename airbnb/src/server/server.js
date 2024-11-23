
const express = require('express');
const properties = require('./properties.json');

const app = express();
const PORT = 3000;

app.get('/property', (req, res) => {
    const fakeid = req.query.fakeid;
    const property = properties.find((p) => p.fakeid === fakeid);

    res.json(property);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
