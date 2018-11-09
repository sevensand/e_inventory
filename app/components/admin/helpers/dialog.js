import React, {Component} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class Dialogbox extends Component{
  render(){
    return(
      <Dialog
       open={this.state.openDialog}
       onClose={this.handleClose}
       aria-labelledby="responsive-dialog-title"
     >
       <DialogTitle id="responsive-dialog-title">{"User Account"}</DialogTitle>
       <DialogContent>
         <DialogContentText>
         User Details
         </DialogContentText>
       </DialogContent>
       <DialogActions>

       <Button onClick={this.handleClickClose} color="primary" autoFocus>
         Confirm
       </Button>

         <Button onClick={this.handleClickClose} color="primary" autoFocus>
           Close
         </Button>
       </DialogActions>
     </Dialog>
    )
  }
}

export default Dialogbox;
