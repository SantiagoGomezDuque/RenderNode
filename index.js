const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/usuarios', (req, res) => {
    res.render('listar-usuario');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
// Ruta para el index
app.get('/', (req, res) => {
  res.render('index');  
});