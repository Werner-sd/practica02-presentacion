import React from 'react';
import './Presentacion.css'; // Asegúrate de que este archivo esté importado correctamente

function Presentacion() {
  return (
    <div className="presentacion">
      <header className="header">
        <h1>Universidad Politécnica de Atlacomulco</h1>
        <h2>Ingeniería en Sistemas Computacionales</h2>
        <h3>Ingeniería en Tecnologías de la Información</h3>
        <h4>Programación Web</h4>
        <h5>Unidad 3. Programación de lado del cliente (JavaScript - React)</h5>
        <h6>Tema: Implementación de Frameworks</h6>
        <p><strong>Nombre Completo del Estudiante (0123456789)</strong></p>
        <p><strong>Atlacomulco, México. 21 de Febrero de 2026</strong></p>
      </header>
    </div>
  );
}

export default Presentacion;
