import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import db from './firebase'
import './NoteAll.css'
import Notes from './Notes'

function NoteAll() {
    const  [notes,setNotes] = useState([])
    useEffect(()=>{
        db.collection('notes').orderBy("timestamp","desc")
        .onSnapshot(snapshot=>{
            setNotes(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    return (
        <div className="noteAll">
            
        {notes.map((note)=>(
            <Notes title={note.title} desc={note.desc} timestamp={note.timestamp}/>
        ))}

            <AddNote/>
        </div>
    )
}

export default NoteAll
