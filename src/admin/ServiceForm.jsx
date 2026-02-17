import { useState, useEffect } from "react";
import {
  createService,
  getService,
  updateService
} from "../services/serviceApi";
import { useNavigate, useParams } from "react-router-dom";

function ServiceForm() {

  const [service, setService] = useState({
    title:"",
    description:"",
    price:""
  });

  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    if(id) load();
  }, []);

  const load = async () => {
    const data = await getService(id);
    setService(data);
  };

  const handleChange = e =>
    setService({
      ...service,
      [e.target.name]: e.target.value
    });

  const submit = async e => {

    e.preventDefault();

    const fd = new FormData();

    fd.append("title", service.title);
    fd.append("description", service.description);
    fd.append("price", service.price);

    if(image)
      fd.append("image", image);

    if(id)
      await updateService(id, fd);
    else
      await createService(fd);

    navigate("/admin/services");
  };

  return (
    <form onSubmit={submit}
          style={{padding:"40px",
                  display:"flex",
                  flexDirection:"column",
                  gap:"10px"}}>

      <input name="title"
             placeholder="Title"
             value={service.title}
             onChange={handleChange}/>

      <textarea name="description"
                placeholder="Description"
                value={service.description}
                onChange={handleChange}/>

      <input name="price"
             placeholder="Price"
             value={service.price}
             onChange={handleChange}/>

      <input type="file"
             onChange={e =>
               setImage(e.target.files[0])}/>

      <button>Save</button>
    </form>
  );
}

export default ServiceForm;