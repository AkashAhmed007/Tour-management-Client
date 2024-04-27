import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const detailsSpot = useLoaderData()
    console.log(detailsSpot)
    const {countryName,spotName,location,cost,season,time,visitor,email,image,description} = detailsSpot
    return (
        <div className="my-20">
            <h1>View details</h1>
            <img src={image} alt="" />
            <p>{countryName}</p>
            <p>{spotName}</p>
            <p>{location}</p>
            <p>{cost}</p>
            <p>{season}</p>
            <p>{time}</p>
            <p>{visitor}</p>
            <p>{email}</p>
            <p>{description}</p>
        </div>
    );
};

export default ViewDetails;