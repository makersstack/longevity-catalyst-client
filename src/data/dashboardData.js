import { LuBarChart2, LuLock, LuUsers } from "react-icons/lu";
import { PiSignOut } from "react-icons/pi";
import { RxLayers } from "react-icons/rx";

export const menuData = [
  {
      id: 1,
      title: 'Dashboard',
      icon: <LuBarChart2 />,
      route: '/dashboard/home'
  },
  {
      id: 2,
      title: 'Projects',
      icon: <RxLayers />,
      submenu: [
          {
              id: 2.1,
              title: 'All Project',
              route: '/dashboard/project/all',
          },
          {
              id: 2.2,
              title: 'Add Project',
              route: '/dashboard/project/add',
          },
      ],
  },
  {
      id: 3,
      title: 'Profile',
      icon: <LuUsers />,
      submenu: [
        {
            id: 3.1,
            title: 'View Profile',
            route: '/dashboard/profile/view',
        },
        {
            id: 3.2,
            title: 'Update Profile',
            route: '/dashboard/profile/update',
        },
    ],
  },
  {
      id: 4,
      title: 'Change Password',
      icon: <LuLock />,
      route: '/dashboard/password/change'
  },
  {
      id: 5,
      title: 'Logout',
      icon: <PiSignOut />,
      route: '/login',
  }
];