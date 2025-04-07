import { useState } from 'react';

export default function useCarousel({ autoPlay = true, totalPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlay, setAutoPlay] = useState(autoPlay);

  function goNext() {
    setCurrentPage((prev) => prev + 1);
  }

  function goPrev() {
    setCurrentPage((prev) => prev - 1);
  }

  function reset(page = 0) {
    setCurrentPage(page);
  }

  function startAutoPlay() {
    setAutoPlay(true);
  }

  function stopAutoPlay() {
    setAutoPlay(false);
  }

  return {
    currentPage,
    goNext,
    goPrev,
    reset,
    startAutoPlay,
    stopAutoPlay,
  };
}
