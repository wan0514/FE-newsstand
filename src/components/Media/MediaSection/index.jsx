import styled from '@emotion/styled';

import CarouselButton from './Carousel';
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
  function handlePrev() {
    console.log('왼쪽 클릭');
  }

  function handleNext() {
    console.log('오른쪽 클릭');
  }

  function getViewComponent(type) {
    const map = {
      list: ListView,
      grid: GridView,
    };
    return map[type];
  }

  const ViewComponet = getViewComponent(viewType);

  return (
    <MediaContainer>
      <Button position="prev" handler={handlePrev} />
      <ViewComponet data={data} />
      <Button position="next" handler={handleNext} />
    </MediaContainer>
  );
};

export default MediaSection;
