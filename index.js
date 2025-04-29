const express = require('express');
const path = require('path');
const app = express();

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para listar usuarios (vista sin variable user)
app.get('/usuarios', (req, res) => {
    res.render('listar-usuario');
});

// Ruta principal (index), ahora con variable user definida
app.get('/', (req, res) => {
    res.render('index', { user: null }); // Aquí definimos user para evitar error
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
