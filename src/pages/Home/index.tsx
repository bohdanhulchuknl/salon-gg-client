import { HomeCarousel } from "../../components";
// import { About, Servises, CarouselWork } from "../../components/Home"; //! CarouselWork мішало
import { Servises, 
  // Masters 
} from "../../components/Home";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/slices/auth.slice";

//! мішало
// import workOne from "../../assets/halloween-nails.jpg";
// import workTwo from "../../assets/nails2.jpg";
// import workThe from "../../assets/nails3.jpg";
// import workFry from "../../assets/nails4.jpg";

import sliderOne from "../../assets/sliderOne.svg";
// import sliderTwo from "../../assets/sliderTwo.jpg";
// import sliderThe from "../../assets/sliderThe.jpg";
// import sliderFive from "../../assets/sliderFive.jpeg";
// import sliderSix from "../../assets/sliderSix.jpeg";

// const sliderWork = [workOne, workTwo, workThe, workFry]; //! sliderWork мішало

const slides = [sliderOne, sliderOne, sliderOne];

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <div className="w-full">
      <div className="w-full m-auto">
        <HomeCarousel slides={slides} user={user} />
      </div>
      <Servises />
      {/* <Masters /> */}

      {/* <CarouselWork autoSlide={true} autoSlideInterval={3000}>
        {sliderWork}
      </CarouselWork> */}
    </div>
  );
};

export default Home;
