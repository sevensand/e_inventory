import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import MailIcon from '@material-ui/icons/MailOutline';

 class Dashboard extends Component{
   constructor(props){
     super(props);
     this.state = {
       norequest: 0,
       noborrowed: 0,
         noequipment:0
     }
   }
  componentDidMount(){
    fetch('/api/request', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(request => {
      var norequest = request.number
      this.setState({ norequest })
    })
    .catch(error => {
      console.log("Error Loading Data...")
    })

    fetch('/api/cborrowed', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(request => {
      var noborrowed = request.number
      this.setState({ noborrowed })
    })
    .catch(error => {
      console.log("Error Loading Data...")
    })


    fetch('/api/equipment', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      var noequipment = data.number
      this.setState({ noequipment })
    })
  }

  render(){

    return(
    <div className="dashcontainer">
    <Grid container spacing={24}>
      <Grid item md>
      <Card>
        <CardContent>
          PENDING REQUEST
          <IconButton color="inherit">
          <Badge badgeContent={this.state.norequest} color="secondary">
          <MailIcon />
          </Badge>
          </IconButton>
        </CardContent>
      </Card>
      </Grid>
      <Grid item md>
      <Card>
        <CardContent>
          TOTAL OF TOOLS
          <IconButton color="inherit">
          <Badge badgeContent={this.state.noequipment} color="secondary">
          <BuildIcon />
          </Badge>
          </IconButton>
        </CardContent>
      </Card>
      </Grid>
      <Grid item md>
      <Card>
          <CardContent>
            BORROWED TOOLS
            <IconButton color="inherit">
            <Badge badgeContent={this.state.noborrowed} color="secondary">
            <NotificationsIcon />
            </Badge>
            </IconButton>
          </CardContent>
      </Card>
      </Grid>
    </Grid>
    <div>
    <Grid container className="mapcontainer">
      <Grid item lg={12}>
          <Card>
          <CardContent>
            <h3 className="MappingText">Location Map Here</h3>
          </CardContent>
          </Card>
      </Grid>
    </Grid>
    </div>
    </div>

    )

  }
}


export default Dashboard;
