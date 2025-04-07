import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import CarouselButton from '../Carousel';
import ListView from './ListView';
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

const ListViewContainer = ({ data: pressList }) => {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, goNext, goPrev, reset } = useCarousel({ totalPage });
  const [category, setCategory] = useState('generalEconomy');

  const selectedPressList = pressList[category];
  const selectedPressData = selectedPressList[currentPage];

  useEffect(() => {
    setTotalPage(selectedPressList.length - 1);
  }, [category, selectedPressList, setTotalPage]);

  return (
    <MediaContainer>
      <Button position="prev" handler={goPrev} />
      <ListView
        category={category}
        setCategory={setCategory}
        currentPage={currentPage}
        data={selectedPressData}
        totalPressCount={selectedPressList.length}
        reset={reset}
      />
      <Button position="next" handler={goNext} />
    </MediaContainer>
  );
};

export default ListViewContainer;
