import { makeStyles } from '@mui/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth=220
const useStyles=makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      background: '#f4f4f4'
    }
})

export default function Layout({children}) {
    const classes=useStyles();
    const navigate=useNavigate();
    const location=useLocation();

    const menuItems=[
      {
        text: 'View Notes',
        icon: <SubjectOutlined color='primary'/>,
        path: '/'
      },
      {
        text: 'Create Notes',
        icon: <AddCircleOutlineOutlined color='primary'/>,
        path: '/create'
      }
    ]
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
            <Typography variant='h5' color="primary" align="center">
              <NoteAddOutlinedIcon/>Reaact Notes
            </Typography>
          </div>
         
         {/* {List/links} */}
         <List>
          {menuItems.map(item => (
            <ListItem
            button 
            key={item.text}
            onClick={()=> navigate(item.path)}
            className={location.pathname==item.path?classes.active:null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
         </List>
        </Drawer>

        <div className={classes.page}>
      { children }
        </div>
    </div>
  )
}
