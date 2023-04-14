// Importa el módulo 'express' para crear la aplicación web
const express = require('express');

// Crea una instancia de la aplicación
const app = express();

// Define una ruta para la página principal de la aplicación ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Inicia el servidor web en el puerto 3000
// La función de callback muestra un mensaje en la consola indicando que el servidor está en ejecución
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

// Define una ruta para la página de 'usuarios'
app.get('/api/usuarios', (req, res) => {
    res.send('Lista de usuarios');
});

// Define una ruta para la página de 'contacto'
app.get('/api/contacto', (req, res) => {

    // Define una ruta para la página de 'usuarios'
app.post('/api/usuarios', (req, res) => {
    // Recibe los datos enviados desde el cliente a través del cuerpo de la petición
    const nombre = req.body?.nombre;
    const apellido = req.body?.apellido;
    
    // Envía los datos recibidos al cliente
    res.send(`Nombre: ${nombre} ${apellido} `);
});

    res.send('Contacto');
});

// Función para estandarizar la respuesta del servidor
function respuestaExistosa(res, status, data) {
    return res.status(status).json({
        status: status,
        data: data
    });
}

// Función para estandarizar la respuesta del servidor cuando ocurre un error
function respuestaError(res, status, error) {
    return res.status(status).json({
        status: status,
        error: error
    });
}

// Agregamos el siguiente codigo para que el servidor pueda responder correctamente un objeto json
//*Debajo de la instancia de la aplicación*
app.use(express.json());