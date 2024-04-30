import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const detailsSpot = useLoaderData()
    console.log(detailsSpot)
    const {countryName,spotName,location,cost,season,time,visitor,email,image,description} = detailsSpot
    return (
        <div className="card bg-base-100 shadow-xl my-20">
        <figure>
          <img
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <hr />
          <p>{description}</p>
          <hr />
          <p>CountryName: {countryName}</p>
          <p>Location: {location}</p>
          <p>Cost: {cost}</p>
          <p>Season: {season}</p>
          <p>Travel-Time: {time}</p>
          <p>Visitor: {visitor}</p>
          <p>User-Email: {email}</p>
          <div className="card-actions">
            <button className='btn btn-secondary'>View Details</button>
          </div>
        
      </div>
    </div>
    );
};

export default ViewDetails;