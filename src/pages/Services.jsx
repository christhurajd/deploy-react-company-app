
import { useEffect, useState } from "react";
import {getServices}
from "../services/serviceApi";

function Services(){

const [services,setServices]=useState([]);

useEffect(()=>{
load();
},[]);

const load=async()=>{
const data=await getServices();
setServices(data);
};

return(
<div style={{padding:"40px"}}>

<h1>Our Services</h1>

{services.map(s=>(
<div key={s.id}>

<img src={s.imageUrl}
width="200"/>

<h2>{s.title}</h2>

<p>{s.description}</p>

<b>${s.price}</b>

</div>
))}

</div>
);
}

export default Services;
// import ServiceCard from "../components/ServiceCard";

// function Services() {
//   const services = [
//     {
//       title: "Full Stack SaaS Development",
//       description: " "
//     },
//     {
//       title: "Website Development",
//       description: "In Website Development, we excel in crafting dynamic and visually captivating websites using Twill - A Laravel CMS and WordPress. Our expertise lies in delivering tailored solutions that not only engage users but also drive tangible results, empowering your online presence to stand out in the digital landscape"
//     },
//     {
//       title: "Mobile App Development",
//       description: "Mobile app development involves creating software applications specifically designed to run on mobile devices like smartphones and tablets. This process includes designing the user interface, developing the app's functionality, and ensuring it works seamlessly across different platforms, such as iOS and Android"
//     },
//     {
//       title: "Cloud Solutions",
//       description: "Secure and scalable cloud services, provided by leaders like AWS, Azure, and Google Cloud, offer on-demand, elastic infrastructure that automatically adjusts resources to match workloads, ensuring high performance, cost optimization, and robust security. Key features include automated scaling, data encryption (at rest/in transit), multi-factor authentication, and disaster recovery, designed to support growth for enterprises, government, and SMBs."
//     }
//   ];

//   return (
//     <div style={{ padding: "40px" }}>
//       {/* <h1>Our Services</h1>
//       <p>
//         We offer a wide range of software development services to meet your
//         business needs.
//       </p>

//       <div style={styles.cardContainer}>
//         {services.map((service, index) => (
//           <ServiceCard
//             key={index}
//             title={service.title}
//             description={service.description}
//           />
//         ))}
//       </div> */}
//       <section className="services-section">
//   <div className="services-container">
//     <h2 className="services-title">Our Services</h2>
//     <p className="services-subtitle">
//       We offer end-to-end software development services to help your
//       business grow digitally.
//     </p>

//     <div className="services-grid">



//       <div className="service-card">
//         <img src="/images/service-web.png" alt="Web Development" />
//         <h3>Web Development</h3>
//         <p>
//           In Website Development, we excel in crafting dynamic and visually captivating websites using latest technology. Our expertise lies in delivering tailored solutions that not only engage users but also drive tangible results, empowering your online presence to stand out in the digital landscape
//         </p>
//       </div>

//       <div className="service-card">
//         <img src="/images/Full-stock.jpg" alt="Full Stack SaaS Development" />
//         <h3>Full Stack SaaS Development</h3>
//         <p>
//           Full stack SaaS development involves mastering both front-end and back-end technologies to create comprehensive web applications. Developers proficient in languages like JavaScript for front-end, PHP and .NET for back-end, and frameworks such as Vue.js for the front-end and Laravel for the back-end, along with databases like MongoDB, can build scalable solutions deployed on cloud platforms like AWS or Azure, ensuring end-to-end functionality and performance..
//         </p>
//       </div>

//       <div className="service-card">
//         <img src="/images/service-cloud.png" alt="Cloud Solutions" />
//         <h3>Cloud Solutions</h3>
//         <p>
//          Secure and scalable cloud services, provided by leaders like AWS, Azure, and Google Cloud, offer on-demand, elastic infrastructure that automatically adjusts resources to match workloads, ensuring high performance, cost optimization, and robust security. Key features include automated scaling, data encryption (at rest/in transit), multi-factor authentication, and disaster recovery, designed to support growth for enterprises, government, and SMBs.
//         </p>
//       </div>

//       <div className="service-card">
//         <img src="/images/service-uiux.jpg" alt="UI UX Design" />
//         <h3>UI / UX Design</h3>
//         <p>
//           User-centric designs that deliver seamless and
//           engaging digital experiences.
//         </p>
//       </div>

//     </div>
//   </div>
// </section>
//     </div>
//   );
// }

// const styles = {
//   cardContainer: {
//     display: "flex",
//     gap: "20px",
//     marginTop: "30px",
//     flexWrap: "wrap"
//   }
// };

// export default Services;