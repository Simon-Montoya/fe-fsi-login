import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import styles from "./card.module.css";

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "CasasBogota"));
        const itemsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
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

