const express = require('express');
const path = require('path');
const app = express();

// Configuración de la carpeta 'public' para archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Aquí es donde está tu carpeta 'views'

// Ruta para la página principal (index.ejs)
app.get('/', (req, res) => {
    const carrito = {}; // Aquí podrías cargar datos reales en el futuro
    res.render('index', { user: null, messages: [], carrito });  // Renderiza el archivo 'index.ejs' desde 'views'
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
