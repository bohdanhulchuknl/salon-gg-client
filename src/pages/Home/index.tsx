import { HomeCarousel } from "../../components";
// import { About, Servises, CarouselWork } from "../../components/Home"; //! CarouselWork мішало
import { About, Servises } from "../../components/Home";


//! мішало
// import workOne from "../../assets/halloween-nails.jpg";
// import workTwo from "../../assets/nails2.jpg";
// import workThe from "../../assets/nails3.jpg";
// import workFry from "../../assets/nails4.jpg";

import sliderOne from "../../assets/sliderOne.svg";
import sliderTwo from "../../assets/sliderTwo.jpg";
import sliderThe from "../../assets/sliderThe.jpg";
// import sliderFive from "../../assets/sliderFive.jpeg";
// import sliderSix from "../../assets/sliderSix.jpeg";

// const sliderWork = [workOne, workTwo, workThe, workFry]; //! sliderWork мішало

const slider = [sliderOne, sliderTwo, sliderThe];

const Home = () => {
  return (
    <div className="font-bree w-full ">
      <div className="w-full  m-auto overflow-hidden  ">
        <HomeCarousel autoSlide={true} autoSlideInterval={3000}>
          {slider}
        </HomeCarousel>
      </div>

      <About />
      <Servises />
      {/* <CarouselWork autoSlide={true} autoSlideInterval={3000}>
        {sliderWork}
      </CarouselWork> */}
    </div>
  );
};

export default Home;
