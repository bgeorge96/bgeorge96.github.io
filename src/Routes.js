import { HelpOutlineTwoTone, HomeTwoTone } from '@material-ui/icons';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import Home from './components/Home';
import Help from './components/Help';
import MusicPage from './components/Music';

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: HomeTwoTone,
    component: Home,
  },
  {
    path: '/music',
    sidebarName: 'Music',
    navbarName: 'Music',
    icon: LibraryMusicIcon,
    component: MusicPage,
  },
  {
    path: '/help',
    sidebarName: 'Help',
    navbarName: 'Help',
    icon: HelpOutlineTwoTone,
    component: Help,
  }
];

export default Routes;
