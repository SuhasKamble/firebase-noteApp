import React from 'react'
import './Header.css'
import FolderIcon from '@material-ui/icons/Folder';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
        <FolderIcon className="header__icon"/>
        <h3>Note App by Suhas</h3>
            </div>
            <div className="header__right">
                <RefreshIcon className="header__icon"/>
                <MoreVertIcon className="header__icon"/>
            </div>
        </div>
    )
}

export default Header
