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
      <MediaSection viewType={viewType} />
    </MediaContainer>
  );
};

export default Media;
