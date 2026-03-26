export default function Recipes() {
  const recipes = [
    { name: "Grandma’s Apple Pie", desc: "Sweet, classic, and family favorite." },
    { name: "Mom’s Famous Chili", desc: "Hearty and spicy comfort food." },
    { name: "Dad’s Sunday Roast", desc: "Perfect roast for Sunday family dinner." },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700">Poulin Family Cookbook</h1>
      <p className="mt-2 text-gray-700">Our favorite family recipes!</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <div key={r.name} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-semibold text-lg text-blue-600">{r.name}</h2>
            <p className="text-gray-700 mt-2">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}