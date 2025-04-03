import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 49px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

const InnerList = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  transform: translateY(${({ index }) => `-${index * 49}px`});
  transition: ${({ isTransitioning }) =>
    isTransitioning ? 'transform 0.5s ease-in-out' : 'none'};
`;

const RollingItemContainer = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text.strong};
  background-color: ${({ theme }) => theme.colors.surface.alt};
  ${({ theme }) => theme.typography.b14}
`;

const NewsSource = styled.span`
  font-weight: bold;
`;

const NewsTitle = styled.span`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m14}
`;

const RollingItem = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedData = [...data, data[0]];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId); // unmount 될 때 interval clear
  }, [data.length]);

  useEffect(() => {
    if (index === data.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [index, data.length]);

  return (
    <Wrapper>
      <InnerList index={index} isTransitioning={isTransitioning}>
        {extendedData.map((news) => (
          <RollingItemContainer key={news.id}>
            <NewsSource>{news.press}</NewsSource>
            <NewsTitle>{news.title}</NewsTitle>
          </RollingItemContainer>
        ))}
      </InnerList>
    </Wrapper>
  );
};

export default RollingItem;
