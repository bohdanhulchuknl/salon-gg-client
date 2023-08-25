import { HomeCarousel } from "../../components";

import {
  OurWorks,
  Servises,
  WhyUs,
} from "../../components/Home";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/slices/auth.slice";

import sliderOne from "../../assets/home_slider/1.jpg";
import sliderTwo from "../../assets/home_slider/2.jpg";
import sliderThe from "../../assets/home_slider/3.jpg";

const slides = [sliderOne, sliderTwo, sliderThe];

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <div className="w-full">
      <div className="w-full m-auto">
        <HomeCarousel slides={slides} user={user} />
      </div>
      <Servises />
      <WhyUs />
      <OurWorks/>
      {/* <Masters /> */}

      {/* <CarouselWork autoSlide={true} autoSlideInterval={3000}>
        {sliderWork}
      </CarouselWork> */}
    </div>
  );
};

export default Home;
