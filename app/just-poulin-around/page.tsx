export default function JustPoulinAround() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700">Just Poulin Around</h1>
      <p className="mt-2 text-gray-700">Family jokes, memes, and random fun!</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <p>“Nothin’… just hanging around!”</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <p>Family meme placeholder</p>
        </div>
      </div>
    </div>
  );
}