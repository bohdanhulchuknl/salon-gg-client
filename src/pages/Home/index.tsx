import { Carousel } from "../../components";
import { About } from "../../components/Home";

import sliderOne from "../../assets/sliderOne.svg";
import sliderTwo from "../../assets/sliderTwo.jpg";
import sliderThe from "../../assets/sliderThe.jpg";

const slider = [sliderOne, sliderTwo, sliderThe];

const Home = () => {
  return (
    <div className="font-bree">
      <div className="min-h-[calc(100vh-86px)] md:h-full">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {slider}
        </Carousel>
      </div>
      <About />
    </div>
  );
};

export default Home;
