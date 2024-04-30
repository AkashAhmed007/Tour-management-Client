import { Link } from "react-router-dom";

const Countries = () => {
  return (

    <div className="mx-auto lg:w-10/12 md:w-3/4 w-full" >
    <h1 className="text-3xl font-bold text-center m-5">Where are you want to go?</h1>
    <div className="grid lg:grid-cols-2">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center text-2xl font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Bangladesh
            </a>
          </div>
          <Link to ='/allspot'>
            <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button>
        </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/CP66kCP/images-q-tbn-ANd9-Gc-TU-l-E-25-I4-PS7-PGx-Xpp-Tv-Dt-Pe336rr-Fc-Uy-Wpy-VFpf1g-s.jpg"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Bandorban hill Tracking is most excited place for visit
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
            Bangladesh is a land of amazing natural beauty and there are no bounds of her prettiness which has glorified by the blessing of nature. therefore, in a small country like Bangladesh, there are lots of Tourist Places that can be said as a tourist destination
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center text-2xl font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Thailand
            </a>
          </div>
        <Link to ='/allspot'>
        <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button>
        </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/Mpd2S09/sddefault.jpg"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
              The best time to visit Thailand
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
            Thailand is Southeast Asia’s most visited country, and for good reason. From the golden Buddhist temples and floating markets, to thick jungles and exotic wildlife, to white-sand beaches and tropical reefs, there’s a myriad of attractions on offer. 
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center text-2xl font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Indonesia
            </a>
          </div>
          <Link to='/allspot' rel="noopener noreferrer" href="#">
          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button>
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/zHpCC0D/Raja-Ampat-Island-in-Indonesia.jpg"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center text-2xl font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Malaysia
            </a>
          </div>
          <Link to='/allspot' rel="noopener noreferrer" href="#">
          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button>
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/M2BBwVj/malaysia-top-attractions-petronas-twin-towers.jpg"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center text-2xl font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
             Vietnam
            </a>
          </div>
          <Link to='/allspot' rel="noopener noreferrer" href="#">
          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button>
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/Qcb9j0m/Vietnam-cover-9th-Mar.jpg"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center text-2xl font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Cambodia
            </a>
          </div>
          <Link to='/allspot' rel="noopener noreferrer" href="#">
          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</button>
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/bXrfkx7/cambodia-top-places-to-visit-battambang.jpg"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Countries;
