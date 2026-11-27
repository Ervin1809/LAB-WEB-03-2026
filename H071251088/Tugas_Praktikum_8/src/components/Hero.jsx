export default function Hero({ nama, slogan, lokasi }) {
  return (
    <div className="bg-blue-50 p-10 text-center rounded-lg shadow-sm mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{nama}</h2>
      <p className="text-lg text-gray-600 mb-4">{slogan}</p>
      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">{lokasi}</span>
    </div>
  );
}