import GridView from './GridView';
import ListView from './ListView';

const MedaiSection = ({ isListView }) => {
  return <> {isListView ? <ListView /> : <GridView />} </>;
};

export default MedaiSection;
