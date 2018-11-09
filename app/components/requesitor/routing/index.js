import React from 'react';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FolderIcon from '@material-ui/icons/FolderOpen';
import BuildIcon from '@material-ui/icons/Build';

import Dashboard from '../dashboard';
import Create from '../create';
import RequestList from '../requestlist';
const Routes = [
   {
     path: '../requesitor/dashboard',
     exact: true,
     component: Dashboard,
     sidebarName: 'Dashboard',
     icon: DashboardIcon
   },
   {
     path: '../requesitor/create',
     exact: true,
     component: Create,
     sidebarName: 'Create',
     icon: FolderIcon
   },
   {
     path: '../requesitor/requestlist',
     exact: true,
     component: RequestList,
     sidebarName: 'Request List',
     icon: BuildIcon
   }
];

export default Routes;
