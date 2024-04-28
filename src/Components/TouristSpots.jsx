const TouristSpots = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">All Tourist Spots</h1>
      <section className="py-6 dark:bg-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/QrNDv24/St-Marting-Island.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/RSscJV0/11reasonsthailand.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/vc7bQZ9/5e1756c2e2aa6471e49e4ef2-indonesia-places-to-visit.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/C1dSRj4/8994658f-13ad-4106-bde4-856450359f47.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/qNrXxBf/ho-chi-minh-city-at-night-22c7df816ce4493eb0e86cf54fe03309.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/VVYQj3T/Mekong-delta1.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/sHVs1tM/image-asset.jpghttps://i.ibb.co/q7WnXCg/A-Guide-to-Bokor-National-Park-6.jpg"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/dtpB9XT/220114145841725a-Phnom-Penh-Park-56-tab.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristSpots;
