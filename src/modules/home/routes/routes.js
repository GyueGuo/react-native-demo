import Index from '../views/index';
import User from '../views/user';

export default [
  {
    name: 'home/index',
    component: Index,
    title: '首页',
    // icon: require('../assets/images/tab-home.png'),
    // selectIcon: require('../assets/images/tab-home-selected.png'),
  },
  {
    name: 'home/user',
    component: User,
    title: '用户中心',
    // icon: require('../assets/images/tab-user.png'),
    // selectIcon: require('../assets/images/tab-user-selected.png'),
  },
];
