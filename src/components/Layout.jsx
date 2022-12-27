import { makeStyles } from '@mui/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {format} from 'date-fns'

const drawerWidth=220
const useStyles=makeStyles((theme)=>{
  return{
    page:{
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3)
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
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)!important`
    },
    toolbar: theme.mixins.toolbar,
    date:{
      flexGrow: 1
    },
    avatar:{
      marginLeft: theme.spacing(2)
    }
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
        <AppBar
        className={classes.appbar}
        elevation={0}
        >
          <Toolbar>
            <Typography className={classes.date}>
              Today is the {format(new Date(), 'do MMMM Y')}
            </Typography>
            <Typography>
              Mario 
            </Typography>
            <Avatar src="./avataaars.png" className={classes.avatar}/>
          </Toolbar>
        </AppBar>

        {/* {Side Drawer} */}
        <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor='left'
        classes={{paper:classes.drawerPaper}}
        >
          <div>
            <Typography variant='h5' color="primary" align="center" className={classes.title}>
              <NoteAddOutlinedIcon/>React Notes
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
          <div className={classes.toolbar}></div>
      { children }
        </div>
    </div>
  )
}
