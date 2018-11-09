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
import DoneIcon from '@material-ui/icons/DoneOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Table from '@material-ui/core/Table';
import TableHeader from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


import AccountIcon from '@material-ui/icons/AccountCircle';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import PlaceIcon from '@material-ui/icons/Place';
import CalendarIcon from '@material-ui/icons/CalendarToday';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

 class Borrowed extends Component{
   constructor(props){
     super(props);
     this.state = {
       openDialog: false,
       request: [],
       data: [],
       counts: 0,
       page: 0,
       rowsPerPage: 5,
       query: '',
     }

     this.handleClickOpen = this.handleClickOpen.bind(this);
     this.handleClickClose = this.handleClickClose.bind(this);
     this.handleChangePage = this.handleChangePage.bind(this);
     this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

     this.handleSearch = this.handleSearch.bind(this);
   }

  componentDidMount(){
    fetch('/api/cborrowed', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(request => {
      var data = request.result
      this.setState({ data })
    })
    .catch(error => {
      console.log("Error Loading Data...")
    })
  }

  handleClickOpen(id, e) {
    this.setState({
      openDialog: true,
    });
    fetch('/api/item/' + id)
    .then(res => res.json())
    .then(request => {
      this.setState({ request })
    });
  }
  handleClickClose(){
    this.setState({
      openDialog: false
    });
  }


  handleChangePage(e, page){
    this.setState({ page })
  }

  handleChangeRowsPerPage(e){
    this.setState({rowsPerPage: e.target.value})
  }

  handleSearch(e){
    const value = e.target.value;
    this.setState({
      query: value
    })
    this.search(value);
  }

  search(query){
    const url = `/api/search?status=3&description=${query}`;
    fetch(url)
    .then(result => result.json())
    .then(request => {
      var data = request.result
      this.setState({ data: data })
    })
  }

  render(){
      const { data, rowsPerPage, page, request } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return(
      <div>
      <div className="dashcontainer">
        <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
              <h3>BORROWED LIST</h3>
            <Grid item xs>

            <TextField
         id="outlined-adornment-password"
         className=""
         variant="outlined"
         label="Search"
         value={this.state.query}
         onChange={this.handleSearch}
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

            <Grid>
              <Table>

              <TableHeader>
              <TableRow>
                <TableCell>Requesitor</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date Borrow</TableCell>
                <TableCell>Date Return</TableCell>
                <TableCell></TableCell>
              </TableRow>
              </TableHeader>
              <TableBody>
              {
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((requesitor, key) => {
                    return(
                        <TableRow key={requesitor._id}>
                        <TableCell component="th" scope="row">{requesitor.requesitor}</TableCell>
                        <TableCell>{requesitor.description}</TableCell>
                        <TableCell>{requesitor.qty}</TableCell>
                        <TableCell>{requesitor.location}</TableCell>
                        <TableCell>{requesitor.dateborrow}</TableCell>
                        <TableCell>{requesitor.datereturn}</TableCell>
                        <TableCell>
                        <IconButton color="secondary"  aria-label="approved" onClick={this.handleClickOpen.bind(this, requesitor._id)}>
                        <DoneIcon />
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

          <List>
           <ListItem>
           <AccountIcon />
           <ListItemText primary={this.state.request.requesitor} />
           </ListItem>
           <ListItem>
           <BuildIcon />
           <ListItemText primary={this.state.request.description} secondary={this.state.request.qty}  />
           </ListItem>
           <ListItem>
           <PlaceIcon />
           <ListItemText primary={this.state.request.location} />
           </ListItem>
           <ListItem>
           <CalendarIcon />
           <ListItemText primary={this.state.request.dateborrow} />
           </ListItem>
           <ListItem>
           <CalendarIcon />
           <ListItemText primary={this.state.request.datereturn} />
           </ListItem>
          </List>

         </DialogContent>
         <DialogActions>
         <Button onClick={this.handleClickClose} color="primary" autoFocus>
           Return
         </Button>

           <Button onClick={this.handleClickClose} color="primary" autoFocus>
             Close
           </Button>
         </DialogActions>
       </Dialog>
      </div>
      </div>
    )

  }
}


export default Borrowed;
