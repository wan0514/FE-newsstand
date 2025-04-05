import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import CarouselButton from './Carousel';
import useCarousel from './Carousel/useCarousel';
import GridView from './GridView';
import ListView from './ListView';

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

const MediaSection = ({ viewType, data }) => {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, goNext, goPrev, reset } = useCarousel({ totalPage });

  function getViewComponent(type) {
    const map = {
      list: ListView,
      grid: GridView,
    };
    return map[type];
  }

  const ViewComponet = getViewComponent(viewType);

  useEffect(() => {
    reset();
  }, [viewType]);

  return (
    <MediaContainer>
      {currentPage > 0 && <Button position="prev" handler={goPrev} />}
      <ViewComponet
        data={data}
        setTotalPage={setTotalPage}
        currentPage={currentPage}
        reset={reset}
      />
      {currentPage < totalPage && <Button position="next" handler={goNext} />}
    </MediaContainer>
  );
};

export default MediaSection;
