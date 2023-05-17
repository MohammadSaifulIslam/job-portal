import AvailableJobs from "../AvailableJobs/AvailableJobs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <AvailableJobs/>
            <Contact/>
        </div>
    );
};

export default Home;