import React from 'react';
import '../style/nav.css';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

class NavBar extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            RAILWAY LOGO
                        </Typography>
                        <Button variant="contained">Login Button</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            // <div className='navWrapper'>
            //     <div className='logo'>
            //         <h1>LOGO</h1>
            //     </div>
            //     <div className='logOutBtnDiv'>
            //         <Button variant="contained">LogOut</Button>
            //     </div>
            // </div>
        );
    }
}

export default NavBar;