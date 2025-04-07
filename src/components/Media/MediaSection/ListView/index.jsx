import { useCallback, useEffect, useState } from 'react';

import { fieldMap } from '@/utils/constants/constants';

import ListView from './ListView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const ListViewContainer = ({ data }) => {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, goNext, goPrev, reset } = useCarousel();
  const [currentCategory, setCurrentCategory] = useState('generalEconomy');

  const pressList = data[currentCategory];
  const selectedPressData = pressList[currentPage];

  const getCurrentCategoryIndex = useCallback(
    (direction) => {
      const currentIndex = fieldMap.findIndex(
        (item) => item.key === currentCategory
      );
      const nextIndex =
        (currentIndex + direction + fieldMap.length) % fieldMap.length;
      return nextIndex;
    },
    [currentCategory]
  );

  function goToPrevPage() {
    if (currentPage === 0) {
      const prevIndex = getCurrentCategoryIndex(-1);
      const previousCategory = fieldMap[prevIndex].key;

      // 카테고리 변경 전에 이전 카테고리의 총 페이지 수를 계산 : currentCategory 상태는 이전값.
      const prevCategoryTotalPage = data[previousCategory].length - 1;

      setCurrentCategory(previousCategory);
      reset(prevCategoryTotalPage);
    } else {
      goPrev();
    }
  }

  function goToNextPage() {
    if (currentPage === totalPage) {
      const nextIndex = getCurrentCategoryIndex(1);
      const nextCategory = fieldMap[nextIndex].key;

      setCurrentCategory(nextCategory);
      reset();
    } else {
      goNext();
    }
  }

  useEffect(() => {
    setTotalPage(pressList.length - 1);
  }, [currentCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, 20000);

    return () => clearInterval(interval);
  }, [currentPage, totalPage, currentCategory]);

  return (
    <Carousel goPrev={goToPrevPage} goNext={goToNextPage}>
      <ListView
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentPage={currentPage}
        data={selectedPressData}
        totalPressCount={pressList.length}
        reset={reset}
      />
    </Carousel>
  );
};

export default ListViewContainer;
