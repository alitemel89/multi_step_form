import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';


const styles = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10,
    flexDirection: "column"
}

class Success extends React.Component {

  render() {
    
    
    return (
        <ThemeProvider>
            <AppBar style={{ backgroundColor: 'teal' }}>
                <Toolbar>
                    <MenuIcon > </MenuIcon>
                    <Typography style={{ margin: "auto" }} variant="h6"> Success! </Typography>
                </Toolbar>
            </AppBar>
            <br></br><br></br><br></br><br></br>
            <div style={styles}>
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions</p>
            </div>
        </ThemeProvider>
           
    );
  }
}

export default Success;
