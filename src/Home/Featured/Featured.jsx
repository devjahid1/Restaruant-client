import SectionTitle from "../../components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"Featured Menu"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36  bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">When can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi assumenda perspiciatis sapiente inventore est, commodi aspernatur impedit cupiditate voluptas necessitatibus sint ut eveniet, soluta minima quo dolorem. Sit, quod deserunt. Provident inventore laborum fugiat magni tenetur. Dolorem obcaecati laudantium reprehenderit earum! Hic at magni sit necessitatibus doloribus tempora aliquid nisi.</p>
                    <button className="btn btn-outline uppercase border-0 border-b-4 mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;