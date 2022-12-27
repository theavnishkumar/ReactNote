import React, { useEffect } from 'react'
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import NoteCard from './NoteCard';
import Masonry from 'react-masonry-css';


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

    const breakpoints={
        default: 3,
        1200: 2,
        850: 1
    }
  return (
    <div>
        <Container>
        <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
        {notes.map(notes=>(
            <div item key={notes.id}>
                <NoteCard note={notes} handleDelete={handleDelete}/>
            </div>
            ))}
            </Masonry>
            </Container>
    </div>
  )
}
