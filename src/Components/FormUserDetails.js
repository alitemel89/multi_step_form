import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon, TextField } from '@material-ui/core';


class FormUserDetails extends React.Component {

  continue = (event) => {
    event.preventDefault();
    this.props.nextStep()

  }
  render() {
    const { values } = this.props;
    
    

    return (
        <AppBar style={{ backgroundColor:'teal' }}>
          <Toolbar>
            <MenuIcon > </MenuIcon>
            <Typography style={{ margin: "auto" }} variant="h6"> Enter User Details </Typography>
          </Toolbar>      
        </AppBar>
      
    );
  }
}

export default FormUserDetails;
