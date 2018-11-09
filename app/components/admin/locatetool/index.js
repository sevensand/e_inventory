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


class Locatetool extends Component{
  render(){
    return(

      <div className="dashcontainer">
        <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
              <h3>ITEM LOCATION</h3>
            <Grid item xs>

            <TextField
         id="outlined-adornment-password"
         className=""
         variant="outlined"
         label="Search"
         helperText="Barcode (ex: 1W3Y2FF2)"
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
    )
  }
}

export default Locatetool;
