import { useState } from "react";
import { sendContact } from "../services/contactService";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await sendContact(form);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch {

      alert("Failed to send message");

    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Contact Us</h2>

      {success && (
        <p style={{color:"green"}}>
          ✅ Message sent successfully!
        </p>
      )}

      <form onSubmit={handleSubmit}
            style={styles.form}>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button style={styles.btn}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

const styles = {
  form:{
    maxWidth:"500px",
    display:"flex",
    flexDirection:"column",
    gap:"10px"
  },
  btn:{
    background:"#2563eb",
    color:"white",
    padding:"10px",
    border:"none"
  }
};

// import { useState } from "react";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = "Name is required";
//     if (!form.email) newErrors.email = "Email is required";
//     if (!form.subject) newErrors.subject = "Subject is required";
//     if (!form.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Mock submit (API later)
//     console.log("Contact Form Data:", form);
//     setSubmitted(true);
//     setForm({ name: "", email: "", subject: "", message: "" });
//     setErrors({});
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Contact Us</h1>
//       <p>We’d love to hear from you. Please fill out the form below.</p>

//       {submitted && (
//         <p style={{ color: "green", marginTop: "10px" }}>
//           ✅ Message sent successfully!
//         </p>
//       )}


//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         {errors.name && <span style={styles.error}>{errors.name}</span>}

//         <input
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span style={styles.error}>{errors.email}</span>}

//         <input
//           name="subject"
//           placeholder="Subject"
//           value={form.subject}
//           onChange={handleChange}
//         />
//         {errors.subject && <span style={styles.error}>{errors.subject}</span>}

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//         />
//         {errors.message && <span style={styles.error}>{errors.message}</span>}

//         <button type="submit" style={styles.btn}>
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   form: {
//     maxWidth: "400px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     marginTop: "20px"
//   },
//   btn: {
//     padding: "10px",
//     background: "#2563eb",
//     color: "white",
//     border: "none",
//     borderRadius: "5px"
//   },
//   error: {
//     color: "red",
//     fontSize: "12px"
//   }
// };

// export default Contact;