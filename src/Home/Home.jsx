import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
                  <Helmet>
                    <title>BISTRO BOSS | HOME</title>
                  </Helmet>
            <Banner/>
            <div className="max-w-screen-xl mx-auto">
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
            </div>
            
        </div>
    );
};

export default Home;