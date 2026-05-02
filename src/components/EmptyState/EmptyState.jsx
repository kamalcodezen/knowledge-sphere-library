

const EmptyState = () => {
  return (
    <div>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-4">⚠️</div>

        <h2 className="text-xl font-bold text-red-500">Failed to Load Books</h2>

        <p className="text-gray-500 mt-2">
          Something went wrong. Please try again later.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
