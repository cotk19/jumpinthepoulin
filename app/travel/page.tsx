export default function Travel() {
  const trips = [
    { src: "/images/Edinburgh-Castle.jpg", title: "Edinburgh Castle" },
    { src: "/images/Inverness-Castle.jpg", title: "Inverness Adventure" },
    { src: "/images/Denali.jpg", title: "Alaska Vacation" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700">Poulin Adventures</h1>
      <p className="mt-2 text-gray-700">Photos and stories from our trips!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {trips.map((trip) => (
          <div key={trip.title} className="rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={trip.src} alt={trip.title} className="rounded shadow" width={400} height={300}/>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{trip.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}