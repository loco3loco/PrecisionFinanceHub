// Este script ejecuta la construcción y luego copia los archivos a la carpeta raíz
const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

try {
  // Ejecutar el comando de construcción original
  console.log('Ejecutando construcción...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Definir las rutas
  const sourceDir = path.join(__dirname, 'dist', 'public');
  const targetDir = path.join(__dirname, 'public');
  
  // Asegurarse de que la carpeta destino existe
  fs.ensureDirSync(targetDir);
  
  // Copiar los archivos de dist/public a public
  console.log('Copiando archivos de dist/public a public...');
  fs.copySync(sourceDir, targetDir, { overwrite: true });
  
  console.log('Construcción y copia completada exitosamente!');
} catch (error) {
  console.error('Error durante el proceso de construcción:', error);
  process.exit(1);
}