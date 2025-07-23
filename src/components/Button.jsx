export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="mx-4 px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-500 hover:bg-amber-600"
    >
      {children}
    </button>
  );
}
