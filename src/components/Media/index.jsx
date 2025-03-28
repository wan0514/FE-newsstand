import { useState } from 'react';
import styled from '@emotion/styled';
import MediaSection from './MediaSection';
import MediaTab from './MediaTab';

const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Media = () => {
  const [isSubscribedTab, setIsSubscribedTab] = useState(false);
  const [isListView, setIsListView] = useState(false);

  return (
    <MediaContainer>
      <MediaTab
        isSubscribedTab={isSubscribedTab}
        setIsSubscribedTab={setIsSubscribedTab}
        isListView={isListView}
        setIsListView={setIsListView}
      />
      <MediaSection isListView={isListView} />
    </MediaContainer>
  );
};

export default Media;
