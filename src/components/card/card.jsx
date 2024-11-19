import React, { useState, useEffect } from "react";


function CardComponent() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "CasasBogota"));
        const propertiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(propertiesData); 
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
          {property["Título"] && <h2>{property["Título"]}</h2>}
          {property["Precio"] && <p>Precio: {property["Precio"]}</p>}
          {property["Habitaciones"] && <p>Habitaciones: {property["Habitaciones"]}</p>}
          {property["Baños"] && <p>Baños: {property["Baños"]}</p>}
          {property["Área (m²)"] && <p>Área (m²): {property["Área (m²)"]}</p>}
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
