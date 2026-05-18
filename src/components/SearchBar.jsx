export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-5 rounded-2xl border-2 border-gray-300 text-xl"
    />
  );
}
