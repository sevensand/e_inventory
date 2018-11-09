import React from 'react';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FolderIcon from '@material-ui/icons/FolderOpen';
import BuildIcon from '@material-ui/icons/Build';

import Dashboard from '../dashboard';
import Request from '../request';
import Locatetool from '../locatetool';
import Borrowedtool from '../borrowed';
const Routes = [
   {
     path: '../storeman/dashboard',
     exact: true,
     component: Dashboard,
     sidebarName: 'Dashboard',
     icon: DashboardIcon
   },
   {
     path: '../storeman/request',
     exact: true,
     component: Request,
     sidebarName: 'Approved List',
     icon: FolderIcon
   },
   {
     path: '../storeman/borrowed',
     exact: true,
     component: Borrowedtool,
     sidebarName: 'Borrowed List',
     icon: BuildIcon
   },
   {
     path: '../storeman/locatetool',
     exact: true,
     component: Locatetool,
     sidebarName: 'Equipment Location',
     icon: BuildIcon
   }
];

export default Routes;
