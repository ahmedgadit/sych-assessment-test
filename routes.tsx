import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';
import { IRoute } from './types/navigation';
import { IoBookmarks } from 'react-icons/io5';
import { IoMdPaper } from 'react-icons/io';

const routes: IRoute[] = [
  {
    name: "Posts",
    layout: "",
    path: "post",
    icon: <Icon as={IoMdPaper} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Bookmarks",
    layout: "",
    path: "bookmark",
    icon: <Icon as={IoBookmarks} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
