import styled from '@emotion/styled';
import { useState, useEffect, useMemo } from 'react';

import RollingItem from './RollingItem';

const NewsRollingContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export default function NewsRolling() {
  const [rollingNewsData, setRollingNewsData] = useState([]);

  function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  const chunkedData = useMemo(() => {
    return chunkArray(rollingNewsData, 5);
  }, [rollingNewsData]);

  useEffect(() => {
    fetch('/mockData/rollingNews.json')
      .then((res) => res.json())
      .then(setRollingNewsData)
      .catch((err) => console.error('rollingNewsData fetch error:', err));
  }, []);

  return (
    <NewsRollingContainer>
      {chunkedData.map((chunk, index) => (
        <RollingItem key={index} data={chunk} />
      ))}
    </NewsRollingContainer>
  );
}
