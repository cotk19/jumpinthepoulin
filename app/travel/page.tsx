export default function Travel() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Poulin Adventures</h1>
      <p className="mt-2">Photos and stories from our trips!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <img src="/images/scotland-castle.jpg" alt="Edinburgh Castle" className="rounded shadow"/>
        <img src="/images/paris.jpg" alt="Paris" className="rounded shadow"/>
        <img src="/images/beach.jpg" alt="Beach" className="rounded shadow"/>
      </div>
    </div>
  );
}