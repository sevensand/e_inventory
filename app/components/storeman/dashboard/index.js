import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import MailIcon from '@material-ui/icons/MailOutline';


class Dashboard extends Component{
  render() {
    return(
      <div className="dashcontainer">
      <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
            REQUESTED EQUIPMENT
            <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
            <MailIcon />
            </Badge>
            </IconButton>
          </CardContent>
        </Card>
        </Grid>
        <Grid item md>
        <Card>
          <CardContent>
            TOTAL EQUIPMENT
            <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
            <BuildIcon />
            </Badge>
            </IconButton>
          </CardContent>
        </Card>
        </Grid>
        <Grid item md>
        <Card>
            <CardContent>
             BORROWED EQUIPMENT
              <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
              </Badge>
              </IconButton>
            </CardContent>
        </Card>
        </Grid>
      </Grid>
      <div>

      </div>
      </div>

    )
  }
}
export default Dashboard;
