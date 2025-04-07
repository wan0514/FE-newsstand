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
  const selectedPressData = selectedPressList[currentPage];

  useEffect(() => {
    setTotalPage(selectedPressList.length - 1);
  }, [category, selectedPressList, setTotalPage]);

  return (
    <ListView
      category={category}
      setCategory={setCategory}
      currentPage={currentPage}
      data={selectedPressData}
      totalPressCount={selectedPressList.length}
      reset={reset}
    />
  );
};

export default ListViewContainer;
