export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 mt-2">ON PROGRESS. . .</p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-[#8BAC3E] text-white rounded-lg shadow-md hover:bg-[#A4B441] transition"
      >
        Go Home
      </a>
    </div>
  );
}
