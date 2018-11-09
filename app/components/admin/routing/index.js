import React from 'react';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FolderIcon from '@material-ui/icons/FolderOpen';
import BuildIcon from '@material-ui/icons/Build';
import PinDropIcon from '@material-ui/icons/PinDrop';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import Dashboard from '../dashboard';
import Request from '../request';
import Tools from '../tools';
import Locate from '../locatetool';
import Settings from  '../settings';
import Borrowed from '../borrowed';

  const Routes = [
      {
        path: '../admin/dashboard',
        exact: true,
        component: Dashboard,
        sidebarName: 'Dashboard',
        icon: DashboardIcon
      },
      {
        path: '../admin/request',
        exact: true,
        component: Request,
        sidebarName: 'Request List',
        icon: FolderIcon
      },
      {
        path: '../admin/borrowed',
        exact: true,
        component: Borrowed,
        sidebarName: 'Borrowed List',
        icon: SettingsIcon
      },
      {
        path: '../admin/tools',
        exact: true,
        component: Tools,
        sidebarName: 'Tools & Equipment',
        icon: BuildIcon
      },
      {
        path: '../admin/locatetool',
        exact: true,
        component: Locate,
        sidebarName: 'Item Location',
        icon: PinDropIcon
      },
      {
        path: '../admin/settings',
        exact: true,
        component: Settings,
        sidebarName: 'Settings',
        icon: SettingsIcon
      }

];

  export default Routes;
