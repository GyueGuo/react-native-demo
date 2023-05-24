import Index from '../views/index';
import User from '../views/user';

import HomeIcon from '../../../assets/svg/tab-home-icon.svg'
import UserIcon from '../../../assets/svg/tab-user-icon.svg'

export default [
  {
    name: 'home/index',
    component: Index,
    title: '首页',
    options: {
      tabBarIcon: ({focused, color}) => {
        return <HomeIcon style={{ color }} width={20} height={20}/>; //focused ?
      },
    },
    // icon: require('../assets/images/tab-home.png'),
    // selectIcon: require('../assets/images/tab-home-selected.png'),
  },
  {
    name: 'home/user',
    component: User,
    title: '我的',
    options: {
      tabBarIcon: ({focused, color}) => {
        return <UserIcon style={{ color }} width={20} height={20}/>
      },
    },
    // icon: require('../assets/images/tab-user.png'),
    // selectIcon: require('../assets/images/tab-user-selected.png'),
  },
];
