/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import FieldTab from './FieldTab';
import PressInfo from './PressInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const PressNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top: none;
`;

const News = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const MainNewsItem = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const MainTitle = styled.div`
  ${({ theme }) => theme.typography.m16}
  color: ${({ theme }) => theme.colors.text.strong};
`;

const RightNewsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const SubNewsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubNewsItem = styled.div`
  ${({ theme }) => theme.typography.m16}
  color: ${({ theme }) => theme.colors.text.bold};
`;

const EditedByPress = styled.div`
  width: 100%;
  align-self: flex-end;
  ${({ theme }) => theme.typography.m14}
  color: ${({ theme }) => theme.colors.text.weak};
`;

const ListView = ({ data }) => {
  const { logoSrc, editedTime, mainNews, subNewsList, pressName } = data;
  return (
    <Container>
      <FieldTab />
      <PressNews>
        <PressInfo logoUrl={logoSrc} editedTime={editedTime} />
        <News>
          <MainNewsItem>
            <Thumbnail src={mainNews.thumbnail} alt="뉴스 이미지" />
            <MainTitle>{mainNews.title}</MainTitle>
          </MainNewsItem>

          <RightNewsColumn>
            <SubNewsList>
              {subNewsList.map((news) => (
                <SubNewsItem key={news.id}>{news.title}</SubNewsItem>
              ))}
            </SubNewsList>

            <EditedByPress>
              {pressName} 언론사에서 직접 편집한 뉴스입니다.
            </EditedByPress>
          </RightNewsColumn>
        </News>
      </PressNews>
    </Container>
  );
};

export default ListView;
