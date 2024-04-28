import { useLoaderData } from "react-router-dom";
import AddedList from "./AddedList";
const MyList = () => {
const allSpotData = useLoaderData();
 return (
      <div className="min-h-screen my-16">
        <div>
          <div className="grid md:grid-cols-3 gap-5">
          {allSpotData.map((spot) => (
            <AddedList key={spot._id} spot={spot}></AddedList>
          ))}
          </div>
        </div>
      </div>
    );
};

export default MyList;