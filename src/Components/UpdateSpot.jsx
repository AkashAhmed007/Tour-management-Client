import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
const UpdateSpot = () => {
const data = useLoaderData();
const handleSubmit =(e)=>{
  e.preventDefault()
  const form = e.target;
  const country_Name = form.countryName.value
  const spotName = form.spotName.value
  const location= form.location.value
  const cost = form.cost.value
  const season = form.season.value
  const time =form.time.value
  const visitor = form.visitor.value
  const email =form.email.value
  const name = form.name.value
  const image =form.image.value

  const updateValue = {country_Name,spotName,location,cost,season,time,visitor,email,name,image}
  console.log(updateValue)
fetch(`https://tourism-management-server-alpha.vercel.app/updatespot/${data._id}`,{
      method: 'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updateValue)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'You have Updated place spot successfully!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })

  
  }
    return (
        <div className="my-20">
            <div className="min-h-screen my-20">
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 bg-[url('https://i.ibb.co/Lp1cRjr/background-2203989-1280.jpg')] bg-no-repeat bg-center bg-cover">
        <form onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
         
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-4 col-span-full lg:col-span-1 text-white text-center">
              <p className="text-2xl font-bold">
               Update Your Information
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                Country_Name
                </label>
                <input
                  name="countryName"
                  type="text"
                  placeholder="country_Name"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                Tourists_spot_name
                </label>
                <input
                  name="spotName"
                  type="text"
                  placeholder="tourists_spot_name"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                 
                />
               
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                Location
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="location"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                 
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                Average_cost
                </label>
                <input
                  name='cost'
                  type="text"
                  placeholder="average_cost"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                 
                />
                 
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                Seasonality
                </label>
                <input
                  name="season"
                  type="text"
                  placeholder="seasonality"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                Travel_time
                </label>
                <input
                  name = "time"
                  type="text"
                  placeholder="travel_time"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                 
                />
                 
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                TotaVisitorsPerYear
                </label>
                <input
                  name = "visitor"
                  type="text"
                  placeholder="totaVisitorsPerYear"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                User Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="User Email"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  
                />
                 
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                User Name
                </label>
                <input
                  name = 'name'
                  type="text"
                  placeholder="User Name"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  
                />
                
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                  Image
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="Image"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              {/* <button onClick={()=>onSubmit(_id)} className="btn btn-success">Update</button> */}
              <input className="btn btn-secondary" type="submit" value="Update" />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
        </div>
    );
};

export default UpdateSpot;