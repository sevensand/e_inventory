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
import Button from '@material-ui/core/Button';

import { DateRangePicker } from 'react-date-range';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

handleDateChange(ranges){
    console.log(ranges);
}
  render(){
    const selectionRange = {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		}
    return(
      <div className="dashcontainer">
      <Card>
        <CardContent>
            <h3>CREATE REQUEST</h3>
                <Grid container spacing={24} justify="center">

                <Grid item xs={7}>
                <DateRangePicker
                ranges={[selectionRange]}
                onChange={this.handleDateChange}
                />
                </Grid>

                <Grid item xs={7}>
                <TextField
                id="desc"
                className=""
                variant="outlined"
                label="Description"
                className="selecttools"
                />
                </Grid>

                <Grid item xs={7}>
                <TextField
                id="qty"
                variant="outlined"
                label="Qty"
                className="selecttools"
                />
                </Grid>

                <Grid item xs={7}>
                <TextField
                id="desc"
                variant="outlined"
                label="Project Name/Location"
                className="selecttools"
                />
                </Grid>

                <Grid item xs={7}>
                <TextField
                id="duration"
                variant="outlined"
                label="Duration"
                className="selecttools"
                />
                </Grid>



                <Grid item xs={7}>
                        <TextField
                  id="date"
                  label="Date Borrow"
                  type="date"
                  defaultValue="yyyy-MM-dd"
                  className="selecttools"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </Grid>


                <Grid item xs={7}>
                        <TextField
                  id="date"
                  label="Date Return"
                  type="date"
                  defaultValue="yyyy-MM-dd"
                  className="selecttools"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </Grid>

                </Grid>
                <Grid container spacing={24} justify="center">
                <Grid item xs={1}>
              <Button variant="contained" color="primary">
                Send
              </Button>
                </Grid>

                <Grid item xs={1}>
              <Button variant="contained" color="secondary">
                Clear
              </Button>

                </Grid>

                </Grid>

        </CardContent>
      </Card>


      </div>
    )
  }
}

export default Create;
