import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import styles from "./card.module.css";

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      const casasRef = ref(db, "CasasBogota"); // Ruta dentro de tu base de datos
      onValue(casasRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const itemsArray = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setItems(itemsArray);
        }
      });
    };

    fetchItems();
  }, []);

  return (
    <div>
      {items.map((property) => (
        <div key={property.id} className={styles.container}>
          {property["Título"] && <h2>{property["Título"]}</h2>}
          {property["Precio"] && <p>Precio: {property["Precio"]}</p>}
          {property["Habitaciones"] && <p>Habitaciones: {property["Habitaciones"]}</p>}
          {property["Baños"] && <p>Baños: {property["Baños"]}</p>}
          {property["Área (m²)"] && <p>Área (m²): {property["Área (m²)"]}</p>}
        </div>
      ))}
    </div>
  );
};

export default Card;

