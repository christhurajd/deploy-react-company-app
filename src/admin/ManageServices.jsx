import { useEffect, useState } from "react";
import {
  getServices,
  deleteService
} from "../services/serviceApi";
import { Link } from "react-router-dom";

function ManageServices() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getServices();
    setServices(data);
  };

  const remove = async (id) => {
    await deleteService(id);
    load();
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Manage Services</h2>

      <Link to="/admin/add-service">
        Add Service
      </Link>

      {services.map(s => (
        <div key={s.id}
             style={{border:"1px solid #ddd",
                     margin:"10px",
                     padding:"10px"}}>

          <img
            src={s.imageUrl}
            width="120"
          />

          <h3>{s.title}</h3>
          <p>{s.price}</p>

          <Link to={`/admin/edit-service/${s.id}`}>
            Edit
          </Link>

          <button onClick={() => remove(s.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}




const styles = {

grid:{
display:"flex",
gap:"20px",
flexWrap:"wrap",
marginTop:"20px"
},

card:{
width:"260px",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 6px 18px rgba(0,0,0,0.08)"
},

image:{
width:"100%",
height:"150px",
objectFit:"cover",
borderRadius:"10px"
},

createBtn:{
padding:"10px 16px",
background:"#2563eb",
color:"#fff",
border:"none",
borderRadius:"8px"
}

};

export default ManageServices;