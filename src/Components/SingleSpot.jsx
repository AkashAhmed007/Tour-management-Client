import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const SingleSpot = ({spot}) => {
    const {_id,countryName,spotName,location,cost,season,time,visitor,email,image,description} = spot
  return (
    <div>
      <NavLink to={`/addspot/${_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <p>{description}</p>
          <p>{countryName}</p>
          <p>{location}</p>
          <p>{cost}</p>
          <p>{season}</p>
          <p>{time}</p>
          <p>{visitor}</p>
          <p>{email}</p>
          <div className="card-actions justify-end">
            <button>View Details</button>
          </div>
        
      </div>
    </div>
      </NavLink>
    </div>
  );
};

SingleSpot.propTypes = {
    spot: PropTypes.object
}
export default SingleSpot;
