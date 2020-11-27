import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ListItemText from '@material-ui/core/ListItemText';



const styles = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10
}

class Confirm extends React.Component {

  continue = (event) => {
    event.preventDefault();
    // PROCESS FORM //
    this.props.nextStep()
  }

  back = (event) => {
    event.preventDefault();
    this.props.prevStep()
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    
    return (
      <ThemeProvider>
        <AppBar style={{ backgroundColor: 'teal' }}>
          <Toolbar>
            <MenuIcon > </MenuIcon>
            <Typography style={{ margin: "auto" }} variant="h6"> Confirm User Data </Typography>
          </Toolbar>
        </AppBar>
        <br></br><br></br><br></br><br></br>
        {/* CONFIRMATION LIST */}
        <div style={styles}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary={`${firstName} ${lastName}`} /> 
            </ListItem>


            <ListItem button>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={occupation} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary={city} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={bio} />
            </ListItem>

          </List>
        </div>

        {/* BUTTONS */}
        <div style={styles}>
          <Button 
            variant="contained" 
            style={{ backgroundColor: "secondary", color: "gray", marginTop: 50 }}
            onClick={this.back}
            >Back
          </Button>
        
        <div style={styles}>
          <Button 
            variant="contained" 
            style={{ backgroundColor: "teal", color: "#fff", marginTop: 50 }}
            onClick={this.continue}
            >Confirm
          </Button>
        </div>
        </div>
      
      </ThemeProvider>
          
    );
  }
}

export default Confirm;
