import { makeStyles } from '@mui/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const drawerWidth=240
const useStyles=makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper:{
      width: drawerWidth
    },
    root:{
      display: "flex"
    }
})

export default function Layout({children}) {
    const classes=useStyles();
  return (
    <div className={classes.root}>

        {/* {App bar} */}
        {/* {Side Drawer} */}
        <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor='left'
        classes={{paper:classes.drawerPaper}}
        >
          <div>
            <Typography variant='h5'>
              My Notes
            </Typography>
          </div>
        </Drawer>

        <div className={classes.page}>
      {children}
        </div>
    </div>
  )
}
