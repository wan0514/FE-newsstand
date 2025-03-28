import GridView from './GridView';
import ListView from './ListView';

const MediaSection = ({ isListView }) => {
  return <> {isListView ? <ListView /> : <GridView />} </>;
};

export default MediaSection;
