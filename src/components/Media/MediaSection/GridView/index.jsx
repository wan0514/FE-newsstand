import { useContext, useState } from 'react';

import ConfirmModal from '@components/common/Modal';

import { SubscribeContext } from '@/context/SubscribeContext';

import GridView from './GridView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const GridViewContainer = ({ data: pressList, activeTab }) => {
  const { currentPage, goNext, goPrev } = useCarousel();
  const { subscribedPress, addPressSubscription, removePressSubscription } =
    useContext(SubscribeContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 관리
  const [pressIdToRemove, setPressIdToRemove] = useState(null); // 해지할 press id 저장

  const [targetPressName, setTargetPressName] = useState('null');

  const ITEMS_PER_PAGE = 24;
  const MAX_PAGE = 4;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const selectedPressData = pressList.slice(startIndex, endIndex);

  // 구독 상태를 포함한 데이터를 준비
  const pressDataWithSubscription = selectedPressData.map((press) => ({
    ...press,
    isSubscribed: subscribedPress.includes(press.pid), // 구독 여부 확인
  }));

  // 구독한 언론사 데이터
  const subscribedPressData = pressDataWithSubscription.filter(
    (press) => press.isSubscribed === true
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
    console.log('해지됨');
    removePressSubscription(pressIdToRemove); // 구독 해지
    setIsModalOpen(false); // 모달 닫기
  };

  // 모달에서 해지 취소 시
  const cancelRemoveSubscription = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <Carousel
        goNext={goNext}
        goPrev={goPrev}
        showPrev={currentPage > 0}
        showNext={currentPage < MAX_PAGE - 1}
      >
        <GridView
          data={
            activeTab === 'all'
              ? pressDataWithSubscription
              : subscribedPressData
          }
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
