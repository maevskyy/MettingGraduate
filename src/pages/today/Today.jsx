import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import TodayMainEmpty from './TodayMainEmpty';
import TodaMain from './TodaMain';


const Today = () => {

  const mainState = useSelector(state => state.scheduleReducer)

  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {    
    if (mainState.length) {
      setIsEmpty(false)
    }
  },[mainState])

  return (
    <>
    {
      isEmpty
      ? <TodayMainEmpty/>
      : <TodaMain/>
    }
    </>
  );
};

export default Today;
