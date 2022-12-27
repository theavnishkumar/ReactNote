import React, { useEffect } from 'react'
import { useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


export default function Notes() {
    const [notes, setNotes]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    },[])
  return (
    <div>
        <Container>
        <Grid container>

        {notes.map(notes=>(
            <Grid item key={notes.id} xs={12} md={6} lg={4}>
                <Paper>{notes.title}</Paper>
            </Grid>
            ))}
            </Grid>
            </Container>
    </div>
  )
}
