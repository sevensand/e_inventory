import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
class Formfield extends Component {

  render(){
    return(
       <form className="container" noValidate autoComplete="off">
       <TextField
         id="name"
         label="Name"
         variant="outlined"
         margin="normal"
       />
       <TextField
         id="username"
         label="Username"
         variant="outlined"
         margin="normal"
       />
       </form>
    )
  }
}

export defaul Formfield;
