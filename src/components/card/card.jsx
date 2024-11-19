// src/components/card/card.jsx
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; 
import styles from './card.module.css';

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "CasasBogota")); 
        const itemsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {items.map(item => (
        <div key={item.id} className={styles.card}>
          <h3>{item.nombre}</h3> {/* Cambia 'nombre' según los campos de tu documento */}
          <p>{item.descripcion}</p> {/* Cambia 'descripcion' según los campos de tu documento */}
        </div>
      ))}
    </div>
  );
};

export default Card;

