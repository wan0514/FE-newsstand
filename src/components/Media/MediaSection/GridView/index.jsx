import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import GridView from './GridView';
import CarouselButton from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(CarouselButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ position }) => (position === 'prev' ? 'left: -80px;' : 'right: -80px;')}

  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
`;

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
    <MediaContainer>
      {currentPage > 0 && <Button position="prev" handler={goPrev} />}
      <GridView data={selectedPressData} />
      {currentPage < totalPage && <Button position="next" handler={goNext} />}
    </MediaContainer>
  );
};

export default GridViewContainer;
