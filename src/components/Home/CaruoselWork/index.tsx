import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

interface ICaruosel {
  children: string[];
  autoSlide: boolean;
  autoSlideInterval: number;
}

// import { ChevronLeft, ChevronRight } from "react-feather";

export default function CarouselWork({
  children,
  autoSlide = true,
  autoSlideInterval = 3000,
}: ICaruosel) {
  const [curr, setCurr] = useState(2);

  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="container w-48 pt-20 pl-">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children.map((i) => (
          <img src={i} key={i} />
        ))}
      </div>
    </div>
  );
}
