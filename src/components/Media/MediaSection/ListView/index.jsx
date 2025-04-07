import { useEffect, useState } from 'react';

import { fieldMap } from '@/utils/constants/constants';

import ListView from './ListView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const ListViewContainer = ({ data: pressList }) => {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, goNext, goPrev, reset } = useCarousel();
  const [category, setCategory] = useState('generalEconomy');

  const selectedPressList = pressList[category];
  const selectedPressData = selectedPressList[currentPage];

  function goToPrevPage() {
    if (currentPage === 0) {
      const currentIndex = fieldMap.findIndex((item) => item.key === category);
      const prevIndex = (currentIndex - 1 + fieldMap.length) % fieldMap.length;
      const prevCategory = fieldMap[prevIndex].key;

      // 카테고리 변경 전에 이전 카테고리의 총 페이지 수를 계산 : category 상태는 이전값.
      const prevCategoryTotalPage = pressList[prevCategory].length - 1;

      setCategory(prevCategory);
      reset(prevCategoryTotalPage);
    } else {
      goPrev();
    }
  }

  function goToNextPage() {
    if (currentPage === totalPage) {
      const currentIndex = fieldMap.findIndex((item) => item.key === category);
      const nextIndex = (currentIndex + 1) % fieldMap.length;
      setCategory(fieldMap[nextIndex].key);
      reset();
    } else {
      goNext();
    }
  }

  useEffect(() => {
    setTotalPage(selectedPressList.length - 1);
  }, [category, selectedPressList]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, 20000);

    return () => clearInterval(interval);
  }, [currentPage, totalPage, category]);

  return (
    <Carousel goPrev={goToPrevPage} goNext={goToNextPage}>
      <ListView
        category={category}
        setCategory={setCategory}
        currentPage={currentPage}
        data={selectedPressData}
        totalPressCount={selectedPressList.length}
        reset={reset}
      />
    </Carousel>
  );
};

export default ListViewContainer;
