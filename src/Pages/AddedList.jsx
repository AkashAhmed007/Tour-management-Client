import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
const AddedList = ({ spot}) => {
  const { _id, countryName, spotName, location, cost, image, description } = spot;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourism-management-server-alpha.vercel.app/addspot/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your place has been deleted.",
                  icon: "success"
                });
            }
          });
      }
    });
  };
  return (
    <div className="m-12">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Place: {spotName}</h2>
          <p>{description}</p>
          <p>Country: {countryName}</p>
          <p>Location:{location}</p>
          <p>Cost: {cost}</p>
          <div className="btn btn-secondary">
            <NavLink to={`/addspot/${_id}`}>View Details</NavLink>
          </div>
          <div>
           <NavLink to={`/updatespot/${_id}`}>
            <button className="btn btn-primary mr-4 w-full">Edit</button>
            </NavLink>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning w-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
AddedList.propTypes = {
  spot: PropTypes.object,
};
export default AddedList;
