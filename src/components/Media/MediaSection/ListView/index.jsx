import { useState } from 'react';

import ListView from './ListView';

const ListViewContainer = ({ data: pressList }) => {
  const [category, setCategory] = useState('generalEconomy');
  const [currentPressIndex, setCurrentPressIndex] = useState(1);

  const selectedPressList = pressList[category];
  const selectedPressData = pressList[category][currentPressIndex];

  return (
    <ListView
      category={category}
      setCategory={setCategory}
      currentPressIndex={currentPressIndex}
      setCurrentPressIndex={setCurrentPressIndex}
      data={selectedPressData}
      totalPressCount={selectedPressList.length}
    />
  );
};

export default ListViewContainer;
