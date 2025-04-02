/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import Button from '@components/common/Button';

import sampleThumbnail from '@/assets/images/Thumbnail.png';
import sampleLogo from '@/assets/logos/sampleLogo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const FieldTab = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.surface.alt};
`;

const TabButton = styled.button`
  height: 100%;
  padding: 11.5px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.surface.alt};
  color: ${({ theme }) => theme.colors.text.default};
`;

const PressNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top: none;
`;

const PressInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 20px;
`;

const Time = styled.div`
  ${({ theme }) => theme.typography.m12}
  color: ${({ theme }) => theme.colors.text.default};
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

const ListView = () => {
  return (
    <Container>
      <FieldTab>
        {[
          '종합/경제',
          '방송/통신',
          'IT',
          '영자지',
          '스포츠/연예',
          '매거진/전문지',
          '지역',
        ].map((label) => (
          <TabButton key={label}>{label}</TabButton>
        ))}
      </FieldTab>

      <PressNews>
        <PressInfo>
          <Logo src={sampleLogo} />
          <Time>2023.02.10. 18:57 편집</Time>
          <Button isEmphasized label="구독하기" iconType="plus" />
        </PressInfo>

        <News>
          <MainNewsItem>
            <Thumbnail src={sampleThumbnail} alt="뉴스 이미지" />
            <MainTitle>
              대통령실, 도이치모터스 1심 판결에 "김 여사 연루 의혹, 민주당 주장
              깨졌다"
            </MainTitle>
          </MainNewsItem>

          <RightNewsColumn>
            <SubNewsList>
              {[
                '이재명 "공개소환, 회술레같은 수치"',
                '위안부 후원금 횡령 의혹 벌금형',
                '민주, 이재명 출석 당일 맹폭',
                '"매니저라 불러주세요"',
                '초등생 사망, 학대·아내가 다 했다',
                '젤렌스키 유럽 순방 마무리',
              ].map((text, idx) => (
                <SubNewsItem key={idx}>{text}</SubNewsItem>
              ))}
            </SubNewsList>

            <EditedByPress>
              데일리안 언론사에서 직접 편집한 뉴스입니다.
            </EditedByPress>
          </RightNewsColumn>
        </News>
      </PressNews>
    </Container>
  );
};

export default ListView;
