import { useEffect, useState } from 'react';

import ListView from './ListView';

const ListViewContainer = ({
  data: pressList,
  setTotalPage,
  currentPage,
  reset,
}) => {
  const [category, setCategory] = useState('generalEconomy');

  const selectedPressList = pressList[category];
  const selectedPressData = pressList[category][currentPage];

  useEffect(() => {
    setTotalPage(selectedPressList.length - 1);
  });

  useEffect(() => {
    console.log('리셋됨');
    reset();
  }, [category]);

  return (
    <ListView
      category={category}
      setCategory={setCategory}
      currentPage={currentPage}
      data={selectedPressData}
      totalPressCount={selectedPressList.length}
    />
  );
};

export default ListViewContainer;
