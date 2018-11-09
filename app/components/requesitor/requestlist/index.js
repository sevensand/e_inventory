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
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


import Table from '@material-ui/core/Table';
import TableHeader from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

class RequestList extends Component {
  constructor(props){
    super(props);
    this.state = {
      openDialog: false,
      controls: false,
      activateModal: '',
      usertype: '',
      labelWidth: 0
    }

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
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


 handleClickDel() {
   alert('Deleted');
 }

 handleChange(e){
   this.setState({
     usertype: e.target.value
   });
 }

  render(){
    return(
      <div className="dashcontainer">
        <Grid container spacing={24}>
        <Grid item md>
        <Card>
          <CardContent>
          <h3>Request List</h3>
          <Grid container spacing={24}>
            <Grid item xs={10}>
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
     </Grid>

      <Grid container spacing={24}>
      <Table>

      <TableHeader>
      <TableRow>
        <TableCell>Description</TableCell>
        <TableCell>Qty</TableCell>
        <TableCell>Project Name</TableCell>
        <TableCell>Duration</TableCell>
        <TableCell>Date Borrow</TableCell>
        <TableCell>Date Return</TableCell>
        <TableCell></TableCell>
      </TableRow>
      </TableHeader>
      <TableBody>
      <TableRow>

      <TableCell>CORDLESS ROTARY HAMMER OST/HILTI/DRILL/04</TableCell>
        <TableCell>1 </TableCell>
        <TableCell>5 </TableCell>
        <TableCell>10A</TableCell>
        <TableCell>10-10-2018</TableCell>
        <TableCell>10-10-2018</TableCell>
        <TableCell>
        <IconButton color="secondary"  aria-label="approved" onClick={this.handleClickOpen}>
        <EditIcon />
        </IconButton>
        <IconButton color="secondary"  aria-label="approved" onClick={this.handleClickDel}>
        <CloseIcon />
        </IconButton>
        </TableCell>
      </TableRow>
      </TableBody>
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
         <DialogTitle id="responsive-dialog-title">{"Update Request"}</DialogTitle>
         <DialogContent>

        <form className="container" noValidate autoComplete="off">
           <Grid container spacing={24}>

           <Grid item xs={12}>
           <TextField
           id="desc"
           className=""
           variant="outlined"
           label="Description"
           className="selecttools"
           />
           </Grid>

          <Grid item xs={12}>
          <TextField
          id="qty"
          variant="outlined"
          label="Qty"
          className="selecttools"
          />
          </Grid>

           <Grid item xs={12}>
           <TextField
           id="location"
           variant="outlined"
           label="Project Name/Location"
           className="selecttools"
           />
           </Grid>

           <Grid item xs={12}>
           <TextField
           id="duration"
           variant="outlined"
           label="Duration"
           className="selecttools"
           />
           </Grid>


           <Grid item xs={12}>
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

           <Grid item xs={12}>
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
          </form>

         </DialogContent>
         <DialogActions>

         <Button onClick={this.handleClickClose} color="primary" autoFocus>
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

export default RequestList;
