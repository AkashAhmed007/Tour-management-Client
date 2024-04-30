import { useLoaderData } from "react-router-dom";
import AddedList from "./AddedList";
const MyList = () => {
const allSpotData = useLoaderData();
 return (
      <div className="min-h-screen my-16">
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-3">
          {allSpotData.map((spot) => (
            <AddedList key={spot._id} spot={spot}></AddedList>
          ))}
          </div>
        </div>
      </div>
    );
};

export default MyList;