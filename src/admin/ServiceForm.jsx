import { useState } from "react";
import { createService } from "../services/serviceApi";

function ServiceForm() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: ""
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("Title", form.title);
    data.append("Description", form.description);
    data.append("Price", form.price);
    data.append("Image", image);

    await createService(data);

    alert("Service Created!");
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input placeholder="Title"
        onChange={e=>setForm({...form,title:e.target.value})}
      />

      <textarea placeholder="Description"
        onChange={e=>setForm({...form,description:e.target.value})}
      />

      <input type="number" placeholder="Price"
        onChange={e=>setForm({...form,price:e.target.value})}
      />

      <input type="file"
        onChange={e=>setImage(e.target.files[0])}
      />

      <button style={styles.Btn}>Create Service</button>
    </form>
  );
}
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px"
  },
  Btn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }

  
};
export default ServiceForm;