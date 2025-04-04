import { useState } from 'react';

import GridView from './GridView';

const GridViewContainer = ({ data: pressList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 24;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const selectedPressData = pressList.slice(startIndex, endIndex);

  return <GridView data={selectedPressData} />;
};

export default GridViewContainer;
