import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import MediaSection from './MediaSection';
import MediaTab from './MediaTab';

const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ITEMS_PER_PAGE = 24;
const MAX_PAGE = 4;
const LIMIT = ITEMS_PER_PAGE * MAX_PAGE;

const Media = () => {
  const [gridData, setGridData] = useState([]);
  const [listData, setListData] = useState([]);
  const [tabType, setTabType] = useState('all');
  const [viewType, setViewType] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:5173/news/grid?limit=${LIMIT}`).then((res) =>
        res.json()
      ),
      fetch('http://localhost:5173/news/list').then((res) => res.json()),
    ])
      .then(([grid, list]) => {
        setGridData(grid);
        setListData(list);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('데이터 fetch error:', err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

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
        data={viewType === 'grid' ? gridData : listData}
      />
    </MediaContainer>
  );
};

export default Media;
