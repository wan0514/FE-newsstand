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

const Media = () => {
  const [gridData, setGridData] = useState([]);
  const [listData, setListData] = useState([]);
  const [tabType, setTabType] = useState('all');
  const [viewType, setViewType] = useState('grid');

  useEffect(() => {
    fetch('/mockData/pressList.json') // grid view용 데이터
      .then((res) => res.json())
      .then(setGridData)
      .catch((err) => console.error('gridData fetch error:', err));

    fetch('/mockData/pressNews.json') // list view용 데이터
      .then((res) => res.json())
      .then(setListData)
      .catch((err) => console.error('listData fetch error:', err));
  }, []);

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
