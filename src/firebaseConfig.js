import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuración del proyecto Firebase
const firebaseConfig = {
  apiKey: "AlzaSyA9dy1F39qVUOfvc4Of1ZLKckwck7Zyss", // Clave API
  authDomain: "casasbogota-2a61d.firebaseapp.com", // Dominio de autenticación
  databaseURL: "https://casasbogota-2a61d-default-rtdb.firebaseio.com/", // URL de Realtime Database
  projectId: "casasbogota-2a61d", // ID del proyecto
  storageBucket: "casasbogota-2a61d.appspot.com", // Almacenamiento de archivos
  messagingSenderId: "922891554048", // ID del remitente de mensajes
  appId: "1:922891554048:web:xxxxxxxxxxxxxxxxxxxxxx", // Identificador único de la aplicación
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la base de datos
const db = getDatabase(app);

export { db };


