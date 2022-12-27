import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import {DeleteOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles'
import { pink, red, blue, cyan } from '@mui/material/colors';

const useStyles=makeStyles({
    avatar: {
      backgroundColor: (note) => {
        if(note.category == 'work'){
            return blue[700]
        }
        else if(note.category == 'todos'){
          return red[500]
      }
        else if(note.category == 'remainders'){
          return pink[600]
      }
       return cyan[600]
    
      }
    }
  })

export default function NoteCard({note, handleDelete}) {
    const classes=useStyles(note)

  return (
    <div>
        <Card elevation={1}>
            <CardHeader
            avatar={
                <Avatar className={classes.avatar}>
                    {note.category[0].toUpperCase()}
                </Avatar>
            }
            action={
                <IconButton onClick={()=>handleDelete(note.id)}>
                    <DeleteOutlined/>
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2'
                color="textSecondary">
                {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
