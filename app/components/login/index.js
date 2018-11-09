import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { Link, withRouter } from 'react-router-dom';
const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  }
});


class SignIn extends Component {

constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: ''
  }

  this.onSubmit = this.onSubmit.bind(this);
  this.onHandleUserChange = this.onHandleUserChange.bind(this);
    this.onHandlePassChange = this.onHandlePassChange.bind(this);
}

onSubmit(e){
  e.preventDefault();
  var userlog = {
    username: this.state.username,
    password: this.state.password
  }
  fetch('/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userlog)
  })
  .then(res => res.json())
  .then(data => {
    if(data.status == 200) {
      if(data.userlevel == 'admin'){
          this.props.history.push('/admin');
      } else if(data.userlevel == 'storeman') {
          this.props.history.push('./storeman');
      } else {
        this.props.history.push('./requesitor');
      }
    } else if(data.status == 401) {
      console.log('Username and Password Not Matched');
    } else {
      console.log('User and Password not Registered');
    }
  })
  .catch(error => console.error(error));

}

onHandleUserChange(e){
  this.setState({
    username: e.target.value
  })
}
onHandlePassChange(e){
  this.setState({
    password: e.target.value
  })
}

render() {
    const { classes } = this.props;
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            OST
          </Avatar>
          <Typography component="h1" variant="h5">
            SignIn
          </Typography>

          <form onSubmit={this.onSubmit}>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username"
              value={this.state.username}
              onChange={this.onHandleUserChange}
               autoFocus />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.onHandlePassChange}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              variant="outlined"
            >
              SignIn
            </Button>

          </form>


        </Paper>
      </main>
    </React.Fragment>
  );

}

}

export default withStyles(styles)(SignIn);
