import { colors } from '@material-ui/core';
import React from 'react'
import './Notes.css'

function Notes({title,desc,timestamp}) {
    function randomBg() {
        return ;
      }
      console.log(randomBg)
    return (
        <div className="notes" >
            <div>
            
    <h3>{title}</h3>
    <p>{desc}</p>
            </div>
        </div>
    )
}

export default Notes
