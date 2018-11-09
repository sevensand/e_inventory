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
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';


import Table from '@material-ui/core/Table';
import TableHeader from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from "@material-ui/core/MenuItem";
import Dialogbox from '../helpers/dialog';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      openDialog: false,
      controls: false,
      activateModal: '',
      usertype: '',
      labelWidth: 0,
      data: [],
      counts: 0,
      page: 0,
      rowsPerPage: 5,
      request: {name: '', username: '', password: '', contactno: '', userlevel: ''}

    }

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

  }

  componentDidMount(){
    fetch('/api/users', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ data }))
    .catch(error => {
      console.log("error");
    })
  }



 handleClickOpen(id, e) {
   this.setState({
     openDialog: true,
   });

   fetch('/api/users/' + id)
   .then(res => res.json())
   .then(request => {
     this.setState({ request })
   })
 }


handleUpdate(id, e){
  var userup = {
    name: this.state.name,
    username: this.state.username,
    contactno: this.state.contactno,
    userlevel: this.state.userlevel
  }
  fetch('/api/updateuser' + id, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userup)
  })
  .then(res => {
      fetch('/api/users')
      .then(res => res.json())
      .then(request => {
        var data = request.result
        this.setState({ data: data})
        this.setState({openDialog: false})
      })

  })
}


 handleClickClose(){
   this.setState({
     openDialog: false
   });
 }

 handleClickCreate(){
   this.setState({
     openDialog: true
   })
 }

 handleClickDel() {
   alert('Deleted');
 }

 handleChange(e){
   this.setState({
     userlevel: e.target.value
   });
 }


 handleChangePage(e, page){
   this.setState({ page })
 }

 handleChangeRowsPerPage(e){
   this.setState({rowsPerPage: e.target.value})
 }



  render(){
    const { data, rowsPerPage, page, request } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return(
      <div className="dashcontainer">
        <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
          <h3>USER LIST</h3>
          <Grid container spacing={24}>
            <Grid item xs={11}>
            <TextField
         id="outlined-adornment-password"
         className=""
         variant="outlined"
         label="Search"
         helperText="Search Username"
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
       <Grid item xs={1}>
       <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClickCreate}>
        <AddIcon />
      </Button>
       </Grid>
     </Grid>

      <Grid container spacing={24}>
      <Table>

      <TableHeader>
      <TableRow>
        <TableCell>Username</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Contact No</TableCell>
        <TableCell>Userlevel</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
      </TableHeader>
      <TableBody>

        {
          data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((users, key) => {
              return(
                  <TableRow key={users._id}>
                  <TableCell>{users.username}</TableCell>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>+ {users.contactno}</TableCell>
                  <TableCell>{users.userlevel}</TableCell>
                  <TableCell>
                  <IconButton color="secondary"  aria-label="approved" onClick={this.handleClickOpen.bind(this, users._id)}>
                  <EditIcon />
                  </IconButton>
                  <IconButton color="secondary"  aria-label="approved" onClick={this.handleClickDel}>
                  <DeleteIcon />
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

         backIconButtonProps={{
   'aria-label': 'Previous Page',
 }}
 nextIconButtonProps={{
   'aria-label': 'Next Page',
 }}
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
         <DialogTitle id="responsive-dialog-title">{"Update User Account"}</DialogTitle>
         <DialogContent>

        <form className="container" noValidate autoComplete="off">
           <Grid container spacing={24}>
           <Grid item xs={12}>
           <TextField
             id="name"
             label="Name"
             variant="outlined"
             margin="normal"
             onChange={this.handleChange}
             value={this.state.request.name}
             className="textUser"
           />
           </Grid>
           <Grid item xs={12}>
           <TextField
             id="username"
             label="Username"
             variant="outlined"
             margin="normal"
             className="textUser"
             value={this.state.request.username}
             onChange={this.handleInputChange}
           />
           </Grid>

           <Grid item xs={12}>
           <TextField
             id="contactno"
             label="Contact No"
             variant="outlined"
             margin="normal"
             className="textUser"
             value={this.state.request.contactno}
           />
           </Grid>

           <Grid item xs={12}>

           <Select
           id="userlevel"
           label="User Type"
           value={this.state.request.userlevel}
           onChange={this.handleChange}
           className="selecttools"
           input={
            <OutlinedInput
              name="id_usertype"
              id="id_usertype"
              labelWidth={this.state.labelWidth}
              label="Please Select User Type"
            />
           }
           >
           <MenuItem value="admin">Admin</MenuItem>
           <MenuItem value="storeman">Storeman</MenuItem>
           <MenuItem value="requesitor">Requesitor</MenuItem>
           </Select>
           </Grid>



           </Grid>
          </form>

         </DialogContent>
         <DialogActions>

         <Button onClick={this.handleUpdate.bind(this, request._id)} color="primary" autoFocus>
           Update
         </Button>

           <Button onClick={this.handleClickClose} color="primary" autoFocus>
             Close
           </Button>
         </DialogActions>
       </Dialog>


      </div>

    )
  }
}

export default Settings
