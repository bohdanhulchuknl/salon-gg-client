import { Carousel } from "../../components";
import { About, Servises, CarouselWork } from "../../components/Home";

import sliderOne from "../../assets/sliderOne.svg";
import sliderTwo from "../../assets/sliderTwo.jpg";
import sliderThe from "../../assets/sliderThe.jpg";
import workOne from "../../assets/halloween-nails.jpg";
import workTwo from "../../assets/nails2.jpg";
import workThe from "../../assets/nails3.jpg";
import workFry from "../../assets/nails4.jpg";

const slider = [sliderOne, sliderTwo, sliderThe];
const sliderWork = [workOne, workTwo, workThe, workFry];

const Home = () => {
  return (
    <div className="font-bree">
      <div className="min-h-[calc(100vh-80px)] ">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {slider}
        </Carousel>
      </div>
      <About />
      <Servises />
      <CarouselWork autoSlide={true} autoSlideInterval={3000}>
        {sliderWork}
      </CarouselWork>
    </div>
  );
};

export default Home;
