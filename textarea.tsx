export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
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
