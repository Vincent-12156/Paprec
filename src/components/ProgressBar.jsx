export default function ProgressBar({ step }) {
  const width = `${(step / 6) * 100}%`;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
      <div
        className="bg-[#8DC63F] h-4 rounded-full transition-all"
        style={{ width }}
      />
    </div>
  );
}
