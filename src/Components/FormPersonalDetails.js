import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10
}

class FormPersonalDetails extends React.Component {

  continue = (event) => {
    event.preventDefault();
    this.props.nextStep()
  }

  back = (event) => {
    event.preventDefault();
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props;
    
    return (
      <ThemeProvider>
        <AppBar style={{ backgroundColor: 'teal' }}>
          <Toolbar>
            <MenuIcon > </MenuIcon>
            <Typography style={{ margin: "auto" }} variant="h6"> Enter Personal Details </Typography>
          </Toolbar>
        </AppBar>
        <br></br><br></br><br></br><br></br>
        <div style={styles}>
          <TextField
            id="standard-basic"
            label="Occupation"
            variant="outlined"
            onChange= {handleChange('occupation')}
            defaultValue={values.occupation}
          />
        </div>
        <div style={styles}>
          <TextField
            id="outlined-multiline-flexible"
            label="City"
            variant="outlined"
            onChange= {handleChange('city')}
            defaultValue={values.city}
          />
        </div>
        <div style={styles}>
          <TextField
            id="outlined-multiline-flexible"
            label="Bio"
            variant="outlined"
            onChange= {handleChange('bio')}
            defaultValue={values.bio}
          />
        </div>
        <div style={styles}>
          <Button 
            variant="contained" 
            style={{ backgroundColor: "seconday", color: "gray", marginTop: 50 }}
            onClick={this.back}
            >Back
          </Button>
        <div style={styles}>
          <Button 
            variant="contained" 
            style={{ backgroundColor: "teal", color: "#fff", marginTop: 50 }}
            onClick={this.continue}
            >Continue
          </Button>
        </div>
       
        </div>
      </ThemeProvider>
      


        
      
    );
  }
}

export default FormPersonalDetails;
