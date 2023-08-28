import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setTeamIsInView, setTeamRef } from '../../../app/slices/scrollRefs.slice';

const OurTeam = () => {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (ref) {
      dispatch(setTeamRef(ref));
    }
  }, [ref, dispatch]);

  useEffect(() => {
    dispatch(setTeamIsInView(isInView));
  }, [isInView, dispatch]);
  return (
    <div className="h-screen" ref={ref}>
      <div className="container flex items-center justify-center h-full mx-auto ">
        <h5 className=""> OUR TEAM</h5>
      </div>
    </div>
  );
};

export default OurTeam;
