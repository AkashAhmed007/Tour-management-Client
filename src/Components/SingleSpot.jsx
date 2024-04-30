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
      </NavLink>
    </div>
  );
};

SingleSpot.propTypes = {
    spot: PropTypes.object
}
export default SingleSpot;
