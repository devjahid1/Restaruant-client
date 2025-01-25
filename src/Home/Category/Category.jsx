// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
//import bg image
import bgImg from '../../assets/home/chef-service.jpg'

//Image upload
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <section>
        <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}></SectionTitle>
        <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1}/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2}/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SOUPS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3}/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>PIZZAS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4}/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>DESSERTS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5}/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3>
            </SwiperSlide>

      </Swiper>

      <section
    className="h-[500px] bg-cover bg-center flex justify-center items-center"
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    {/*add content here */}
        <div className='text-center w-3/4 bg-white p-10'>
        <h3 className='uppercase text-4xl mb-5'>Bistro Boss</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum sint debitis, dolore <br />unde aliquam et error reprehenderit iure velit ullam quam necessitatibus  quibusdam <br /> veritatis, temporibus expedita. Quasi, deleniti recusandae.</p>
        </div>
  </section>
        </section>
    );
};

export default Category;