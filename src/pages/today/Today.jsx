import { useState } from 'react';

import Table from '../../components/UI/Table/Table';

const Today = () => {
  const [selectedDate, setSelectedDate] = useState('');


  return (
    <div className="p-5">
      <Table setSelectedDate={setSelectedDate}/>
      {selectedDate}
    </div>
  );
};

export default Today;
