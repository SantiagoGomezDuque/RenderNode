const express = require('express');
const path = require('path');
const app = express();

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal (index)
app.get('/', (req, res) => {
    // Sirve el archivo index.html estático desde la carpeta public
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para listar usuarios (sin EJS, solo HTML estático)
app.get('/usuarios', (req, res) => {
    // Sirve el archivo listar-usuario.html estático desde la carpeta public
    res.sendFile(path.join(__dirname, 'public', 'listar-usuario.html'));
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
