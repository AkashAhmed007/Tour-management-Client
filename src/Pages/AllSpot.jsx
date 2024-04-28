import { useLoaderData } from "react-router-dom";
import SingleSpot from "../Components/SingleSpot";

const AllSpot = () => {
  const allSpotData = useLoaderData();
  const handleFilter = (filter) => {
    if (filter === "cost") {
      const sortByCost = allSpotData.sort((a, b) => parseFloat(a.Averge_Cost) - parseFloat(b.Averge_Cost));
      console.log(sortByCost)
    }
  };
  return (
    <div className="min-h-screen my-16">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-full text-center m-1">
          Sort By
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2">
          <li className="text-center bg-gray-600 text-white" onClick={() => handleFilter("cost")}>
            <a >Average_Cost</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-5">
        {allSpotData.map((spot) => (
          <SingleSpot key={spot._id} spot={spot}></SingleSpot>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AllSpot;
