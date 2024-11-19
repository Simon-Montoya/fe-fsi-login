import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // Importa la configuración de Firebase
import styles from "./card.module.css";

function CardComponent() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties")); // Cambia "properties" por el nombre de tu colección
        const propertiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(propertiesData); // Guarda los datos en el estado
      } catch (error) {
        console.error("Error fetching properties: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {properties.map((property) => (
        <div key={property.id} className={styles.container}>
          <h2>{property["Título"] || "Título no disponible"}</h2>
          <p>Precio: {property["Precio"] || "No disponible"}</p>
          <p>Habitaciones: {property["Habitaciones"] || "No disponible"}</p>
          <p>Baños: {property["Baños"] || "No disponible"}</p>
          <p>Área (m²): {property["Área (m²)"] || "No disponible"}</p>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
