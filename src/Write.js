import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase'
import './Write.css'
import firebase from 'firebase'
import { useHistory } from "react-router-dom";

function Write() {
    const history = useHistory();
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")

    const addNote=(e)=>{
        e.preventDefault()
        db.collection('notes').add({
            title:title,
            desc:desc,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setTitle("")
        setDesc("")
        history.push("/");
        
    }

    return (
        <div className="write">
            <form >
                <input value={title} onChange={e=>setTitle(e.target.value)}   type="text" className="write__title" placeholder="title..."/>
                <input value={desc} onChange={e=>setDesc(e.target.value)}  type="text" className="write__desc" placeholder="description..."/>
                <Button disabled={!title} onClick={addNote} type="submit" variant="contained" color="primary">Add Note</Button>
            </form>
        </div>
    )
}

export default Write;
