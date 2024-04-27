import Countries from "../Components/Countries";
import TouristSpots from "../Components/TouristSpots";
import Banner from "../Components/Banner";
import CompanyOverview from "../Components/CompanyOverview";
import CustomerReview from "../Components/CustomerReview";
const Home = () => {
  return (
    <div className="space-y-10 my-14">
      <div>
      <Banner></Banner>
      </div>
      <div className="min-w-screen-xl">
        <Countries></Countries>
      </div>
      <div>
        <TouristSpots></TouristSpots>
      </div>
      <div>
        <CompanyOverview></CompanyOverview>
      </div>
      <div>
      <CustomerReview></CustomerReview>
      </div>
  </div>
  );
};

export default Home;
