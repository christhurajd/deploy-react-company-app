
import ServiceCard from "../components/ServiceCard";

import HeroSlider from "../components/HeroSlider";

import { Link } from "react-router-dom";


function Home() {

  const services = [
    {
      title: "Full Stack SaaS Development",
      description: "Full stack SaaS development involves mastering both front-end and back-end technologies to create comprehensive web applications. Developers proficient in languages like JavaScript for front-end, PHP and .NET for back-end, and frameworks such as Vue.js for the front-end and Laravel for the back-end, along with databases like MongoDB, can build scalable solutions deployed on cloud platforms like AWS or Azure, ensuring end-to-end functionality and performance.",
      image:"/images/service.jpg"
    },
    {
      title: "Website Development",
      description: "In Website Development, we excel in crafting dynamic and visually captivating websites using latest technology. Our expertise lies in delivering tailored solutions that not only engage users but also drive tangible results, empowering your online presence to stand out in the digital landscape",
      image:"/images/service.jpg"
    },
    {
      title: "Mobile App Development",
      description: "Mobile app development involves creating software applications specifically designed to run on mobile devices like smartphones and tablets. This process includes designing the user interface, developing the app's functionality, and ensuring it works seamlessly across different platforms, such as iOS and Android",
      image:"/images/service.jpg"
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud services, provided by leaders like AWS, Azure, and Google Cloud, offer on-demand, elastic infrastructure that automatically adjusts resources to match workloads, ensuring high performance, cost optimization, and robust security. Key features include automated scaling, data encryption (at rest/in transit), multi-factor authentication, and disaster recovery, designed to support growth for enterprises, government, and SMBs.",
      image:"/images/service.jpg"
    }
  ];

  return (
    <>
    <div>

       <HeroSlider />
      {/* Hero Section */}
      {/* <section style={styles.hero}>
        <h1>Building Digital Solutions for Your Business</h1>
        <p>We help companies grow with modern software solutions.</p>
        <button style={styles.heroBtn}>Get a Free Quote</button>
      </section> */}

     <section className="who-section">
  <div className="who-container">

    {/* LEFT: IMAGE */}
    <div className="who-image">
      <img
        src="/images/who-we-are.jpg"
        alt="Our Software Company Team"
      />
    </div>

    {/* RIGHT: CONTENT */}
    <div className="who-content">
      <h2>Who We Are</h2>

      <p className="who-text">
        APCS Software Solutions is a forward-thinking software company
        delivering secure, scalable, and high-performance digital
        solutions for startups and enterprises worldwide.
      </p>

      <p className="who-text">
        Our expert team specializes in web development, mobile
        applications, and cloud technologies with a strong focus on
        quality, innovation, and customer satisfaction.
      </p>

      <div className="who-stats">
        <div className="stat-box">
          <h3>15+</h3>
          <span>Years Experience</span>
        </div>

        <div className="stat-box">
          <h3>70+</h3>
          <span>Projects Delivered</span>
        </div>

        <div className="stat-box">
          <h3>20+</h3>
          <span>Happy Clients</span>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="services-section">
  <div className="services-container">
    <h2 className="services-title">Our Services</h2>
    <p className="services-subtitle">
      We offer end-to-end software development services to help your
      business grow digitally.
    </p>

    <div className="services-grid">

      <div className="service-card">
        <img src="/images/service-web.png" alt="Web Development" />
        <h3>Web Development</h3>
        <p>
          In Website Development, we excel in crafting dynamic and visually captivating websites using latest technology. Our expertise lies in delivering tailored solutions that not only engage users but also drive tangible results, empowering your online presence to stand out in the digital landscape
        </p>
      </div>
      
      <div className="service-card">
        <img src="/images/Full-stock.jpg" alt="Full Stack SaaS Development" />
        <h3>Full Stack SaaS Development</h3>
        <p>
          Full stack SaaS development involves mastering both front-end and back-end technologies to create comprehensive web applications. Developers proficient in languages like JavaScript for front-end, PHP and .NET for back-end, and frameworks such as Vue.js for the front-end and Laravel for the back-end, along with databases like MongoDB, can build scalable solutions deployed on cloud platforms like AWS or Azure, ensuring end-to-end functionality and performance..
        </p>
      </div>
     

      <div className="service-card">
        <img src="/images/service-cloud.png" alt="Cloud Solutions" />
        <h3>Cloud Solutions</h3>
        <p>
         Secure and scalable cloud services, provided by leaders like AWS, Azure, and Google Cloud, offer on-demand, elastic infrastructure that automatically adjusts resources to match workloads, ensuring high performance, cost optimization, and robust security. Key features include automated scaling, data encryption (at rest/in transit), multi-factor authentication, and disaster recovery, designed to support growth for enterprises, government, and SMBs.
        </p>
      </div>

      <div className="service-card">
        <img src="/images/service-uiux.jpg" alt="UI UX Design" />
        <h3>UI / UX Design</h3>
        <p>
          User-centric designs that deliver seamless and
          engaging digital experiences.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="process-image-section">
  <div className="process-container">

    <h2 className="process-title">Our Process</h2>
    <p className="process-subtitle">
      We follow a proven, transparent process to deliver high-quality
      software solutions on time.
    </p>

    {/* STEP 1 */}
    <div className="process-row">
      <div className="process-img">
        <img src="/images/process-requirement.png" alt="Requirement Analysis" />
      </div>
      <div className="process-content">
        {/* <span>01</span> */}
        <h3>Requirement Analysis</h3>
        <p>
          We deeply understand your business goals, challenges, and
          requirements to define a clear project scope.
        </p>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="process-row reverse">
      <div className="process-img">
        <img src="/images/process-design.jpg" alt="Design & Planning" />
      </div>
      <div className="process-content">
        {/* <span>02</span> */}
        <h3>Design & Planning</h3>
        <p>
          Our experts design scalable architecture and intuitive UI/UX
          with a clear development roadmap.
        </p>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="process-row">
      <div className="process-img">
        <img src="/images/process-development.png" alt="Development" />
      </div>
      <div className="process-content">
        {/* <span>03</span> */}
        <h3>Development</h3>
        <p>
          We develop high-performance applications using modern
          technologies and best coding practices.
        </p>
      </div>
    </div>

    {/* STEP 4 */}
    <div className="process-row reverse">
      <div className="process-img">
        <img src="/images/process-testing.png" alt="Testing & QA" />
      </div>
      <div className="process-content">
        {/* <span>04</span> */}
        <h3>Testing & Quality Assurance</h3>
        <p>
          Rigorous testing ensures the application is secure,
          bug-free, and production-ready.
        </p>
      </div>
    </div>

    {/* STEP 5 */}
    <div className="process-row">
      <div className="process-img">
        <img src="/images/process-deployment.png" alt="Deployment & Support" />
      </div>
      <div className="process-content">
        {/* <span>05</span> */}
        <h3>Deployment & Support</h3>
        <p>
          We deploy the solution smoothly and provide continuous
          support and maintenance.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Services Section */}
      {/* <section style={styles.services}>
        <h2>Our Services</h2>
        <div style={styles.cardContainer}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section> */}
<section className="customers-section">
  <div className="customers-container">
    <h2 className="customers-title">Our Customers</h2>
    <p className="customers-subtitle">
      Trusted by startups, SMEs, and enterprises across industries.
    </p>

    <div className="customers-logos">
      <img src="/images/client1.png" alt="Client 1" />
      <img src="/images/client2.png" alt="Client 2" />
      <img src="/images/client3.png" alt="Client 3" />
      <img src="/images/client4.png" alt="Client 4" />
      <img src="/images/client5.png" alt="Client 5" />
      <img src="/images/client6.png" alt="Client 6" />
    </div>
  </div>
</section>
      

      {/* Call to Action */}
      <section style={styles.cta}>
        <h2>Ready to take the next step?</h2>
        <Link to="/contact">
        <button style={styles.ctaBtn}>Get in touch</button>
        </Link>
      </section>
<br/>
      <section className="home-contact">
  <div className="home-contact-container">

    {/* Company Address */}
    <div className="contact-box">
      <h3>APCS Pvt Ltd</h3>
      <p>
        No.  561A, LAKSHMIPURAM, KANGEYANALLUR,<br />
        GANDHI NAGAR PO , KATPADI TK VELLORE – 632006.,<br />
        Tamil Nadu, India
      </p>

      <p>
        📞 +91 6381232751<br />
        ✉️ contact@apcs.com
      </p>
    </div>

    {/* Quick Links */}
    <div className="contact-box">
      <h3>Useful Links</h3>
      <ul>
        <Link to="/about">
        <li>About Us</li>
        </Link>
        <Link to="/careers">
        <li>Careers</li>
        </Link>
        <Link to="/contact">
        <li>Contact</li>
        </Link>
      </ul>
    </div>

    {/* Social Media */}
    <div className="contact-box">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="#" aria-label="LinkedIn"><img
        src="/images/in.png" width="40" height="40"
        alt="LinkedIn"
      /></a>
        <a href="#" aria-label="Twitter"><img
        src="/images/twitter.png" width="40" height="40"
        alt=""
      /></a>
        <a href="#" aria-label="Facebook"><img
        src="/images/fb.png" width="40" height="40" alt=""
      /></a>
        <a href="#" aria-label="Instagram"><img
        src="/images/insta.png" width="40" height="40"
        alt=""
      /></a>
      </div>
    </div>

  </div>
</section>
    </div>
    </>
  );
}

const styles = {
  hero: {
    padding: "60px",
    background: "#1e293b",
    color: "white",
    textAlign: "center"
  },
  heroBtn: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  },
  intro: {
    padding: "40px",
    textAlign: "center"
  },
  services: {
    padding: "40px",
    background: "#f1f5f9"
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px"
  },
  cta: {
    padding: "50px",
    textAlign: "center",
    background: "#0f172a",
    color: "white"
  },
  ctaBtn: {
    marginTop: "15px",
    padding: "12px 25px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default Home;