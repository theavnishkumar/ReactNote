import React, { useEffect } from 'react'
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import NoteCard from './NoteCard';


export default function Notes() {
    const [notes, setNotes]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    },[])

    const handleDelete=async(id)=>{
        await fetch('http://localhost:8000/notes/'+id,{
            method: 'DELETE'
        })

        const newNotes=notes.filter(note=>note.id!=id)
        setNotes(newNotes)
    }
  return (
    <div>
        <Container>
        <Grid container spacing={3}>

        {notes.map(notes=>(
            <Grid item key={notes.id} xs={12} md={6} lg={4}>
                <NoteCard note={notes} handleDelete={handleDelete}/>
            </Grid>
            ))}
            </Grid>
            </Container>
    </div>
  )
}
