import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import {ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10
}

class FormUserDetails extends React.Component {

  continue = (event) => {
    event.preventDefault();
    this.props.nextStep()

  }
  render() {
    const { values } = this.props;
    
    

    return (
      <ThemeProvider>
        <AppBar style={{ backgroundColor: 'teal' }}>
          <Toolbar>
            <MenuIcon > </MenuIcon>
            <Typography style={{ margin: "auto" }} variant="h6"> Enter User Details </Typography>
          </Toolbar>
        </AppBar>
        <br></br><br></br><br></br><br></br>
        <div style={styles}>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="outlined"
          />
        </div>
        <div style={styles}>
          <TextField
            id="outlined-multiline-flexible"
            label="Last Name"
            variant="outlined"
          />
        </div>
        <div style={styles}>
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            variant="outlined"
          />
        </div>
        <div style={styles}>
          <Button 
            variant="contained" 
            style={{ backgroundColor: "teal", color: "#fff", marginTop: 50 }}
            onClick={this.continue}
            >Continue
        </Button>
        </div>
      </ThemeProvider>
      


        
      
    );
  }
}

export default FormUserDetails;
