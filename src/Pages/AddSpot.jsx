const AddSpot = () => {
  return (
    <div className="min-h-screen my-20">
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 bg-[url('https://i.ibb.co/VC9yssZ/twilight-8171206-1280.jpg')] bg-no-repeat bg-center bg-cover">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1 text-white text-xl">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                country_Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="country_Name"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                tourists_spot_name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="tourists_spot_name"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                location
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="location"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                average_cost
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="average_cost"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                seasonality
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="seasonality"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                travel_time
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="travel_time"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                totaVisitorsPerYear
                </label>
                <input
                  id="firstname"
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
                  id="firstname"
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
                  id="firstname"
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
                  id="firstname"
                  type="text"
                  placeholder="Image"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="firstname" className="text-xl font-bold text-white">
                short description
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="short description"
                  className="w-full px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <button className="btn btn-primary w-full">Add</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddSpot;
