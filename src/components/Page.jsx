function Page({ title, children }) {
  return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"40px 20px" }}>
      {title && <h1 style={{ marginBottom:10 }}>{title}</h1>}
      {children}
    </div>
  );
}
export default Page;