import GridView from './GridView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const GridViewContainer = ({ data: pressList }) => {
  const { currentPage, goNext, goPrev } = useCarousel();

  const ITEMS_PER_PAGE = 24;
  const MAX_PAGE = 4;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const selectedPressData = pressList.slice(startIndex, endIndex);

  return (
    <Carousel
      goNext={goNext}
      goPrev={goPrev}
      showPrev={currentPage > 0}
      showNext={currentPage < MAX_PAGE - 1}
    >
      <GridView data={selectedPressData} />
    </Carousel>
  );
};

export default GridViewContainer;
