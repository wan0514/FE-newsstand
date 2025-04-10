import { useContext, useEffect, useState } from 'react';

import ConfirmModal from '@components/common/Modal';

import { SubscribeContext } from '@/context/SubscribeContext';
import {
  getPressDataWithSubscription,
  filterSubscribedPressData,
  getSlicedData,
} from '@/utils/parse';

import GridView from './GridView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const GridViewContainer = ({ data: pressList, activeTab }) => {
  const { currentPage, goNext, goPrev, reset } = useCarousel();
  const { subscribedPress, addPressSubscription, removePressSubscription } =
    useContext(SubscribeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pressIdToRemove, setPressIdToRemove] = useState(null);

  const [targetPressName, setTargetPressName] = useState('null');

  const ITEMS_PER_PAGE = 24;
  const MAX_PAGE = 4;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // 1. pressDataWithSubscription 준비
  const pressDataWithSubscription = getPressDataWithSubscription(
    pressList,
    subscribedPress
  );

  // 2. activeTab에 따른 필터링된 데이터
  const filteredPressData =
    activeTab === 'all'
      ? pressDataWithSubscription
      : filterSubscribedPressData(pressDataWithSubscription);

  // 3. 페이지네이션 처리
  const selectedPressData = getSlicedData(
    filteredPressData,
    startIndex,
    endIndex
  );

  // 4. totalPage 계산 (동적으로, 최대 4페이지로 제한)
  const totalPage = Math.min(
    Math.ceil(filteredPressData.length / ITEMS_PER_PAGE),
    MAX_PAGE
  );

  // 구독 추가
  const handleAddSubscription = ({ pid: pressId }) => {
    addPressSubscription(pressId);
  };

  // 구독 해지
  const handleRemoveSubscription = ({ pid: pressId, name }) => {
    setPressIdToRemove(pressId); // 해지할 press id 저장
    setTargetPressName(name);
    setIsModalOpen(true); // 모달 열기
  };

  // 모달에서 해지 확인 시
  const confirmRemoveSubscription = () => {
    removePressSubscription(pressIdToRemove); // 구독 해지
    setIsModalOpen(false); // 모달 닫기
  };

  // 모달에서 해지 취소 시
  const cancelRemoveSubscription = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  useEffect(() => reset(), [activeTab]);

  return (
    <>
      <Carousel
        goNext={goNext}
        goPrev={goPrev}
        showPrev={currentPage > 0}
        showNext={currentPage < totalPage - 1}
      >
        <GridView
          data={selectedPressData}
          handleAddSubscription={handleAddSubscription} // 구독 추가 함수 전달
          handleRemoveSubscription={handleRemoveSubscription} // 구독 해지 함수 전달
        />
      </Carousel>
      {/* 구독 해지 확인 모달 */}
      {isModalOpen && (
        <ConfirmModal
          mediaName={targetPressName}
          onConfirm={confirmRemoveSubscription} // 해지 확인
          onModalClose={cancelRemoveSubscription} // 해지 취소
        />
      )}
    </>
  );
};

export default GridViewContainer;
