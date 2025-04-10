import GridView from './GridView';
import ListView from './ListView';

const MediaSection = ({ viewType, data, activeTab }) => {
  function getViewComponent(type) {
    const map = {
      list: ListView,
      grid: GridView,
    };
    return map[type];
  }

  const ViewComponet = getViewComponent(viewType);

  return <ViewComponet data={data} activeTab={activeTab} />;
};

export default MediaSection;
