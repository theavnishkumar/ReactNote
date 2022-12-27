import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'green'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
  const classes=useStyles()
  return (
    <div>
    <Typography 
    className={classes.title}
    variant="h6"
    component="h2"
    gutterBottom
    color="secondary"
    align="center"
    >
        Create a New Note
    </Typography>

    <Button 
    className={classes.btn} 
    type="submit" color="primary" 
    variant="contained" 
    endIcon={<SendIcon/>}
    >
      Submit
      </Button><br/>
    {/* <AcUnitIcon/>
    <AcUnitIcon color="secondary" fontSize="large"/> */}
    </div>
  )
}
