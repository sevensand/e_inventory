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
import PrintIcon from '@material-ui/icons/Print';
import MenuItem from "@material-ui/core/MenuItem";
import Table from '@material-ui/core/Table';
import TableHeader from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Tools extends Component{
    constructor(props) {
      super(props);
      this.state = {
        labelWidth: 0,
        location: '',
        condition: '',
        openDialog: false,
        equipment: [],
        data: [],
        counts: 0,
        page: 0,
        rowsPerPage: 5
      };

      this.handleCondition = this.handleCondition.bind(this);
      this.handleLocation = this.handleLocation.bind(this);

      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleClickClose = this.handleClickClose.bind(this);

      this.handleChangePage = this.handleChangePage.bind(this);
      this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentDidMount(){
    fetch('/api/equipment', {
      method: 'GET',
      headers: {
      "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(equipment => {
      var data = equipment.result
      this.setState({ data })
    })
    .catch(error => {
      console.log("Error Loading data...")
    })
  }


  handleClickOpen() {
    this.setState({
      openDialog: true,
    });
  }
  handleClickClose(){
    this.setState({
      openDialog: false
    });
  }

  handleCondition(e){
    this.setState({
      condition: e.target.value,
    });
  }
  handleLocation(e){
    this.setState({
      location: e.target.value,
    });
  }

  handleChangePage(e, page){
    this.setState({ page })
  }

  handleChangeRowsPerPage(e){
    this.setState({rowsPerPage: e.target.value})
  }

  render(){
     const { data, rowsPerPage, page, selected } = this.state;
     const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return(
      <div className="dashcontainer">
        <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
              <h3>Inventory</h3>

              <div>
              <Grid container spacing={24}>
              <Grid item xs={3}>
              <TextField
              id="outlined-adornment-password"
              variant="outlined"
              label="Search"
              helperText="Search Equipment Desc"
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
              <Grid item xs={3}>
              <Select
              id="location"
              label="Location"
              className="selecttools"
              value={this.state.location}
              onChange={this.handleLocation}
              input={
               <OutlinedInput
                 name="location"
                 id="id_location"
                 labelWidth={this.state.labelWidth}
               />
              }
              >
              <MenuItem value="10A">10A</MenuItem>
              <MenuItem value="10X">10X</MenuItem>
              <MenuItem value="10N">10N</MenuItem>
              </Select>
              </Grid>

              <Grid item xs={3}>
              <Select
              id="condition"
              label="condition"
              value={this.state.condition}
              onChange={this.handleCondition}
              className="selecttools"
              input={
               <OutlinedInput
                 name="id_condition"
                 id="id_condition"
                 labelWidth={this.state.labelWidth}
               />
              }
              >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Working">Working</MenuItem>
              <MenuItem value="NotWorking">Not Working</MenuItem>
              </Select>
              </Grid>

              <Grid item xs={3}>
                      <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="yyyy-MM-dd"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>

              </Grid>
              </div>


            <Grid>
              <Table>

              <TableHeader>
              <TableRow>
                <TableCell>Equipment Desc</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell></TableCell>
              </TableRow>
              </TableHeader>
              <TableBody>

              {
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tools, key) => {
                    return(
                        <TableRow key={tools._id}>
                        <TableCell>{tools.description}</TableCell>
                        <TableCell>{tools.brand}</TableCell>
                        <TableCell>{tools.model}</TableCell>
                        <TableCell>{tools.location}</TableCell>
                        <TableCell>{tools.condition}</TableCell>
                        <TableCell>{tools.purchaseorder}</TableCell>
                        <TableCell>{tools.qty}</TableCell>
                        <TableCell>
                        <IconButton color="secondary"  aria-label="approved" onClick={this.handleClickOpen}>
                        <VisibilityIcon />
                        </IconButton>
                        </TableCell>
                        </TableRow>
                    )
                })
              }

              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}

              </TableBody>
              <TableFooter>
              <TableRow>
                <TablePagination
                 count={data.length}
                 rowsPerPage={rowsPerPage}
                 page={page}
                 onChangePage={this.handleChangePage}
                 onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
              </TableFooter>

              </Table>

            </Grid>

            <Grid item xs={2} align-items-xs-flex-end>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"

            >
            Print
            <PrintIcon />
            </Button>
            </Grid>

          </CardContent>
        </Card>
        </Grid>
        </Grid>

        <Dialog
         open={this.state.openDialog}
         onClose={this.handleClose}
         aria-labelledby="responsive-dialog-title"
       >
         <DialogTitle id="responsive-dialog-title">{"Image"}</DialogTitle>
         <DialogContent>
          <img src={require('../../../assets/img/no_preview.png')} className="toolsImage"/>
         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleClickClose} color="primary" autoFocus>
             Close
           </Button>
         </DialogActions>
       </Dialog>

      </div>
    )
  }
}

export default Tools;
