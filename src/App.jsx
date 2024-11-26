import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const data = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center font-extrabold text-3xl">
        Hot Hot Cold Coffee {data.length}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {data.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;


