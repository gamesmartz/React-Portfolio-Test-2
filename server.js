const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Working!</h1>');
});


app.listen(PORT, () => {
    console.log('server running on PORT: '+  PORT);
});

