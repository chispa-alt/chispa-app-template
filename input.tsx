export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        marginTop: "0.5rem",
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
}
