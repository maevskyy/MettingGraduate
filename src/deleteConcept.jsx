
//! func with position
const [time, setTime] = useState({
    title: 'Event',
    from: 0,
    till: 0,
  });

  function name(firstVal = time.from, secondVal = time.till) {
    const heightMain = secondVal - firstVal;
    let top = null;
    let height = null;

    if (firstVal === 1) {
      top = 0;
    }
    if (firstVal >= 1) {
      for (let index = 1; index < firstVal; index++) {
        top += 130;
      }
    }
    if (heightMain >= 1) {
      height += 160;
      for (let index = 1; index < heightMain; index++) {
        height += 130;
      }
    }

    const finalHeight = `${height}px`;
    const finalTop = `${top}px`;
    return { finalHeight, finalTop };
  }

  
 const handlerFrom = (e) => {
    setTime({...time, from: Number(e.target.value)})
    name()
   } 
  
   const handlerTill = (e) => {
    setTime({...time, till: Number(e.target.value)})
    name()
   }
  
   const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
