import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';

import Table from '@material-ui/core/Table';
import TableHeader from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class Equipmentloc extends Component{
  render() {
    return(
      <div>
      <div className="dashcontainer">
        <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
              <h3>EQUIPMENT LOCATION</h3>
            <Grid item xs>

            <TextField
         id="outlined-adornment-password"
         className=""
         variant="outlined"
         label="Search"
         InputProps={{
           endAdornment: (
             <InputAdornment position="end">
               <IconButton
                 aria-label="Toggle password visibility"
               >
               <SearchIcon />
               </IconButton>
             </InputAdornment>
           ),
         }}
       />
            </Grid>



          </CardContent>
        </Card>
        </Grid>
        </Grid>
      </div>
      </div>
    )
  }
}

export default Equipmentloc;
