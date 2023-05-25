import Index from '../views/index';
import User from '../views/user';

import HomeIcon from '../../../assets/svg/tab-home-icon.svg';
import UserIcon from '../../../assets/svg/tab-user-icon.svg';

export default [
  {
    name: 'home/index',
    component: Index,
    title: '首页',
    renderIcon: active => (
      <HomeIcon
        style={{color: active ? '#039bfb' : '#808080'}}
        width={20}
        height={20}
      />
    ),
  },
  {
    name: 'home/user',
    component: User,
    title: '我的',
    renderIcon: active => (
      <UserIcon
        style={{color: active ? '#039bfb' : '#808080'}}
        width={20}
        height={20}
      />
    ),
  },
];
