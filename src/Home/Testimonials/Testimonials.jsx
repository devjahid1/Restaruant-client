import SectionTitle from '../../components/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
//Review Rating
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
//React icon
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`review.json`)
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={"What our client say"}
                heading={"Testimonials"}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review=><SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                            />
                            <FaQuoteLeft className='mt-10 text-5xl' />

                            <p className='py-8'>{review.details}</p>
                            <p className='text-2xl text-orange-400'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
      </Swiper>
            
        </section>
    );
};

export default Testimonials;