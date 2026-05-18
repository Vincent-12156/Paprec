export default function Header({ title }) {
  return (
    <div className="bg-[#003B71] text-white p-6 rounded-2xl shadow mb-6">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
    </div>
  );
}
