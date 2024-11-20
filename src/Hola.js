import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HolaAPI = () => {
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para hacer la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://django-hello-world-tan-eight.vercel.app/hola');
        
        // Si la respuesta contiene un mensaje, lo establecemos en el estado
        setMensaje(response.data.message || "No se encontró el mensaje");
      } catch (err) {
        setError("Error al consultar la API");
      }
    };

    fetchData();
  }, []); // Este efecto solo se ejecuta una vez cuando el componente se monta

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Consulta a la API</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{mensaje}</p>
      )}
    </div>
  );
};

export default HolaAPI;
