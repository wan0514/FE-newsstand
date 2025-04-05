import { useEffect } from 'react';

import GridView from './GridView';

const GridViewContainer = ({ data: pressList, setTotalPage, currentPage }) => {
  const ITEMS_PER_PAGE = 24;
  const MAX_PAGE = 4;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const selectedPressData = pressList.slice(startIndex, endIndex);

  useEffect(() => {
    const totalPageCount = Math.ceil(pressList.length / ITEMS_PER_PAGE);
    const limitedPageCount = Math.min(totalPageCount, MAX_PAGE);
    setTotalPage(limitedPageCount - 1);
  }, [pressList]);

  return <GridView data={selectedPressData} />;
};

export default GridViewContainer;
