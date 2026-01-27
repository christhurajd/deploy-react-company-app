function About() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>About APCS Software Solutions</h1>

      <p>
        APCS Software Solutions is a technology-driven company focused on
        delivering high-quality software products for businesses worldwide.
      </p>

      <section style={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To help businesses grow by delivering reliable, scalable, and
          innovative digital solutions.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To become a globally trusted software company known for innovation
          and customer satisfaction.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Experienced development team</li>
          <li>✔ Modern technologies</li>
          <li>✔ On-time delivery</li>
          <li>✔ Customer-first approach</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  section: {
    marginTop: "30px"
  }
};

export default About;