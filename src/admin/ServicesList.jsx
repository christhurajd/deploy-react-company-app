import { useEffect, useState } from "react";
import { getServices, deleteService } from "../services/serviceApi";

function ServicesList(){

  const [services,setServices]=useState([]);

  useEffect(()=>{
    load();
  },[]);

  const load = async()=>{
    const data = await getServices();
    setServices(data);
  };

  const handleDelete = async(id)=>{
    await deleteService(id);
    load();
  };

  return(
    <div>
      <h2>Services</h2>

      {services.map(s=>(
        <div key={s.id} style={{border:"1px solid #ddd",margin:"10px",padding:"10px"}}>

          <img src={s.imageUrl} width="120"/>

          <h3>{s.title}</h3>

          <p>{s.description}</p>

          <b>${s.price}</b>

          <br/><br/>

          <button style={styles.Btn} onClick={()=>handleDelete(s.id)}>
            Delete
          </button>

        </div>
      ))}
    </div>
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
export default ServicesList;