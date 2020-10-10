import React from 'react'
import './AddNote.css'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
function AddNote() {
    return (
        <div className="addNote">
            <Link to="/write">

            <button className="addNote__button">
                <AddIcon className="addNote__icon" fontSize="large"/>
            </button>
            </Link>
        </div>
    )
}

export default AddNote
