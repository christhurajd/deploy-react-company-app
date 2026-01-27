function Button({ children, onClick, type="button", variant="primary", disabled }) {
  const styles = {
    primary: { background:"#2563eb", color:"#fff" },
    success: { background:"#16a34a", color:"#fff" },
    danger:  { background:"#dc2626", color:"#fff" },
    outline: { background:"transparent", color:"#2563eb", border:"1px solid #2563eb" }
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding:"10px 18px",
        borderRadius:"8px",
        border:"none",
        cursor:"pointer",
        opacity: disabled ? 0.6 : 1,
        ...styles[variant]
      }}
    >
      {children}
    </button>
  );
}
export default Button;