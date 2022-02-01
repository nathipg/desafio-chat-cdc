import { faBell, faAdjust, faImage } from '@fortawesome/free-solid-svg-icons';

import List from '../components/List';
import ListItem from '../components/ListItem';
import TextIcon from '../components/TextIcon';
import DefaultHeader from '../components/DefaultHeader';

const ConfigurationPage = () => {
  return (
    <>
      <DefaultHeader title="Configuration" />
      <List>
        <ListItem>
          <TextIcon icon={faBell} text="Notifications" />
        </ListItem>
        <ListItem>
          <TextIcon icon={faAdjust} text="Theme" />
        </ListItem>
        <ListItem>
          <TextIcon icon={faImage} text="Wallpaper" />
        </ListItem>
      </List>
    </>
  );
};

export default ConfigurationPage;
