import AvailableJobs from "../AvailableJobs/AvailableJobs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <AvailableJobs/>
        </div>
    );
};

export default Home;