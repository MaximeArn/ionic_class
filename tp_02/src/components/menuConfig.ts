import {
  homeOutline,
  laptopOutline,
  flaskOutline,
  filmOutline,
  settingsOutline,
} from 'ionicons/icons';

export interface SubMenuItem {
  title: string;
  path: string;
}

export interface MenuItemConfig {
  id: string;
  title: string;
  icon: string;
  path?: string;
  subItems?: SubMenuItem[];
}

export const menuItems: MenuItemConfig[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/home',
    icon: homeOutline,
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: laptopOutline,
    subItems: [
      { title: 'AI', path: '/technology/ai' },
      { title: 'Mobile', path: '/technology/mobile' },
      { title: 'Web', path: '/technology/web' },
    ],
  },
  {
    id: 'science',
    title: 'Science',
    icon: flaskOutline,
    subItems: [
      { title: 'Space', path: '/science/space' },
      { title: 'Biology', path: '/science/biology' },
    ],
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    icon: filmOutline,
    subItems: [
      { title: 'Movies', path: '/entertainment/movies' },
      { title: 'Music', path: '/entertainment/music' },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: settingsOutline,
  },
];
