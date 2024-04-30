import { useState } from "react";
import { useForm} from "react-hook-form"
import Swal from "sweetalert2";
const AddSpot = () => {
const [registerError,setRegisterError] = useState('');
const {register,handleSubmit,formState: { errors }} = useForm()

const onSubmit =(data)=>{
    const {countryName,spotName,location,cost,season,time,visitor,email,image,description} = data
    const addSpotData = {countryName,spotName,location,cost,season,time,visitor,email,image,description}

    fetch('https://tourism-management-server-alpha.vercel.app/addspot',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(addSpotData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'You have added spot successfully!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  setRegisterError('')
  }
  return (
    <div className="min-h-screen my-20">
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 bg-[url('https://i.ibb.co/VC9yssZ/twilight-8171206-1280.jpg')] bg-no-repeat bg-center bg-cover">
        <form onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          {registerError && <p className="text-red-500">{registerError}</p>}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1 text-white text-xl">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-2xl font-bold">
               Choose Your  Destination
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
                  {...register("countryName", { required: true })}
                />
                {errors.countryName && <span className="text-red-500" >This field is required</span>}
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
                  {...register("spotName", { required: true })}
                />
                {errors.spotName && <span className="text-red-500" >This field is required</span>}
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
                  {...register("location", { required: true })}
                />
                {errors.location && <span className="text-red-500" >This field is required</span>}
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
                  {...register("cost", { required: true })}
                />
                 {errors.cost && <span className="text-red-500" >This field is required</span>}
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
                  {...register("season", { required: true })}
                />
                {errors.season && <span className="text-red-500" >This field is required</span>}
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
                  {...register("time", { required: true })}
                />
                 {errors.time && <span className="text-red-500" >This field is required</span>}
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
                  {...register("visitor", { required: true })}
                />
                {errors.visitor && <span className="text-red-500" >This field is required</span>}
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
                  {...register("email", { required: true })}
                />
                 {errors.email && <span className="text-red-500" >This field is required</span>}
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
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-red-500" >This field is required</span>}
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
                  {...register("image", { required: true })}
                />
                {errors.image && <span className="text-red-500" >This field is required</span>}
              </div>
              <div className="col-span-full">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                short description
                </label> <br />
                <input type="text" name="description" className="w-80 h-20" placeholder="Enter your description"
                {...register("description", { required: true })}
                />
              </div>
              <input  className=" w-full btn" type="submit" value="Add" />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddSpot;
