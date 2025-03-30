const fs = require('fs-extra');
const path = require('path');

// Definir las rutas
const sourceDir = path.join(__dirname, 'dist', 'public');
const targetDir = path.join(__dirname, 'public');

// Asegurarse de que la carpeta destino existe
fs.ensureDirSync(targetDir);

// Copiar los archivos de dist/public a public
fs.copySync(sourceDir, targetDir, { overwrite: true });

console.log('Archivos copiados de dist/public a public exitosamente');