import { useState } from 'react';

import ListView from './ListView';

const ListViewContainer = ({ data: pressList }) => {
  const [category, setCategory] = useState('generalEconomy');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const selectedPressList = pressList[category];
  const data = pressList[category][currentPage];

  return (
    <ListView
      category={category}
      setCategory={setCategory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      data={data}
      totalPressCount={selectedPressList.length}
      itemsPerPage={itemsPerPage}
    />
  );
};

export default ListViewContainer;
