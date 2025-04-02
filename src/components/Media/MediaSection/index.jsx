import sampleLogo from '@/assets/logos/sampleLogo.png';

import GridView from './GridView';
import ListView from './ListView';

const MediaSection = ({ viewType }) => {
  //test용 언론사 배열
  const mediaList = Array.from({ length: 24 }, () => ({
    imageUrl: sampleLogo,
    name: '언론사이름',
  }));

  function getViewComponent(type) {
    const map = {
      list: ListView,
      grid: GridView,
    };
    return map[type];
  }

  const ViewComponet = getViewComponent(viewType);

  return <ViewComponet mediaList={mediaList} />;
};

export default MediaSection;
