import { set, ref, push } from "firebase/database";
import { db } from "../firebase";
import React, { useState } from "react";

const Medicine = () => {
  const [medicines, setMedicines] = useState([
    { name: "Medicine1", qty: 0, time: "" },
    { name: "Medicine2", qty: 0, time: "" },
    { name: "Medicine3", qty: 0, time: "" },
    { name: "Medicine4", qty: 0, time: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newMedicines = [...medicines];
    newMedicines[index][field] = value;
    setMedicines(newMedicines);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const medicineRef = ref(db, "halwass");
      const newMedicineRef = push(medicineRef);
      await set(newMedicineRef, {
        medicines: medicines.filter((med) => med.qty || med.time),
        createdAt: new Date().toISOString(),
      });
      alert("Medicines Added!");
      setMedicines([
        { name: "Medicine 1", qty: 0, time: "" },
        { name: "Medicine 2", qty: 0, time: "" },
        { name: "Medicine 3", qty: 0, time: "" },
        { name: "Medicine 4", qty: 0, time: "" },
      ]);
      console.log(medicines)
    } catch (error) {
      alert("Error adding medicines: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Aarogya</h2>
      <p style={styles.description}>Enter up to 4 medicines for proper nursing care</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {medicines.map((med, index) => (
          <div key={index} style={styles.formContainer}>
            <span>{med.name}</span>
            <input
              type="text"
              placeholder="Time"
              value={med.time}
              onChange={(e) => handleChange(index, "time", e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Qty"
              value={med.qty}
              onChange={(e) => handleChange(index, "qty", e.target.value)}
              style={styles.input}
            />
          </div>
        ))}

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Medicine;

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    marginTop: "6rem",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "10px",
  },
  description: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "40%",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    alignSelf: "center",
  },
  formContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    padding: "0 10px",
  },
};
