import React from 'react';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';

function Header() {
    return (
        <div className="header-component">
            <StickyNote2RoundedIcon
                className="logo"
                fontSize="large" />
            <h1>Keep Note</h1>
        </div>
    );
}

export default Header;