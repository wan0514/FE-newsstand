import { useEffect, useState } from 'react';

import GridView from './GridView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const GridViewContainer = ({ data: pressList }) => {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, goNext, goPrev } = useCarousel();

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

  return (
    <Carousel
      goNext={goNext}
      goPrev={goPrev}
      showPrev={currentPage > 0}
      showNext={currentPage < totalPage}
    >
      <GridView data={selectedPressData} />
    </Carousel>
  );
};

export default GridViewContainer;
