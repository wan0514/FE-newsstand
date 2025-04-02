import styled from '@emotion/styled';
import { useState } from 'react';

import MediaSection from './MediaSection';
import MediaTab from './MediaTab';

const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const mediaList = Array.from({ length: 24 }, () => ({
  imageUrl: 'src/assets/logos/sampleLogo.png',
  name: '언론사이름',
}));

//test용 리스트뷰 데이터
const pressNewsData = {
  pressName: '데일리안',
  logoSrc: 'src/assets/logos/sampleLogo.png',
  editedTime: '2023.02.10. 18:57',
  mainNews: {
    title:
      '대통령실, 도이치모터스 1심 판결에 "김 여사 연루 의혹, 민주당 주장 깨졌다"',
    thumbnail: 'src/assets/images/Thumbnail.png',
  },
  subNewsList: [
    {
      id: 1,
      title: '이재명 "공개소환, 회술레같은 수치"',
      link: 'https://example.com/news/1',
    },
    {
      id: 2,
      title: '위안부 후원금 횡령 의혹 벌금형',
      link: 'https://example.com/news/2',
    },
    {
      id: 3,
      title: '민주, 이재명 출석 당일 맹폭',
      link: 'https://example.com/news/3',
    },
    {
      id: 4,
      title: '"매니저라 불러주세요"',
      link: 'https://example.com/news/4',
    },
    {
      id: 5,
      title: '초등생 사망, 학대·아내가 다 했다',
      link: 'https://example.com/news/5',
    },
    {
      id: 6,
      title: '젤렌스키 유럽 순방 마무리',
      link: 'https://example.com/news/6',
    },
  ],
};

const Media = () => {
  const [tabType, setTabType] = useState('all');
  const [viewType, setViewType] = useState('grid');

  return (
    <MediaContainer>
      <MediaTab
        tabType={tabType}
        setTabType={setTabType}
        viewType={viewType}
        setViewType={setViewType}
      />
      <MediaSection
        viewType={viewType}
        data={viewType === 'grid' ? mediaList : pressNewsData}
      />
    </MediaContainer>
  );
};

export default Media;
