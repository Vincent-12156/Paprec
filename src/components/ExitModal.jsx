export default function ExitModal({ open, onClose, data }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-[#003B71]">
          Session Summary
        </h2>

        <div className="space-y-3 text-xl">
          <p>
            <strong>Language:</strong> {data.language?.name}
          </p>
          <p>
            <strong>Name:</strong> {data.profile?.lastName}
          </p>
          <p>
            <strong>First Name:</strong> {data.profile?.firstName}
          </p>
          <p>
            <strong>Company:</strong> {data.profile?.company}
          </p>
          <p>
            <strong>Vehicle:</strong> {data.vehicle}
          </p>
          <p>
            <strong>Merchandise:</strong> {data.merchandise}
          </p>
          <p>
            <strong>Started:</strong> {data.startTime}
          </p>
          <p>
            <strong>Left:</strong> {data.endTime}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 bg-[#003B71] text-white px-8 py-4 rounded-2xl text-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
