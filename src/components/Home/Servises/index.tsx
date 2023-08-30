import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';

import { CreateOrderSelectService } from "../../../pages";
import { setServiceIsInView, setServiceRef } from '../../../app/slices/scrollRefs.slice';

const Servises = () => {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (ref) {
      dispatch(setServiceRef(ref));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setServiceIsInView(isInView));
  }, [isInView, dispatch]);
  return (
    <div ref={ref} className="container pt-10 mx-auto md:pl-28 md :py-20">
      <CreateOrderSelectService />
    </div>
  );
};

export default Servises;
