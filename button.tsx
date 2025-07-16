export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
