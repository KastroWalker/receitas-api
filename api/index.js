const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const receitas = [
        'Bolo de chocolate',
        'Pastel de Frango',
        'Salada de repolho',
        'Sopa de carne'
    ];

    res.send(receitas);
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error when running the server');
    } else {
        console.log(`Server running at http://127.0.0.1:${port}`);
    }
});