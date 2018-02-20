const express = require('express');
const cors = require('cors');
const path =  require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// app.get('/', (req, res) => {
//     res.send('<h1>Working!</h1>');
// });

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log('server running on PORT: '+  PORT);
});

