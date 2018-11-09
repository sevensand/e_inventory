import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import routes from '../routing';
import  {Link, withRouter } from 'react-router-dom';


const TextIcon = {
  color: '#ffffff',
}
const FontIcon = {
  color: '#00BCD4',
}

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(

      <div>
      <Divider />
        {routes.map((prop, key) => {
       return (
         <Link to={prop.path} key={key} style={{ textDecoration: 'none'}}>
         <ListItem button>
           <ListItemIcon >
           <prop.icon style={FontIcon}/>
           </ListItemIcon>
           <ListItemText primary={<Typography variant="inherit" style={TextIcon}>{prop.sidebarName}</Typography>}/>
         </ListItem>
         </Link>
       );
     })}
        <Divider />



      </div>

    )
  }
}

export default withRouter(Sidebar);
