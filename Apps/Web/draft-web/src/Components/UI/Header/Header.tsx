import React from 'react';
import { Link } from 'react-router-dom';

export interface IHeaderProps {
}

function Header (props: IHeaderProps) {
return (
    <div>
        <Link to='/login'>LogIn</Link>
        <Link to='/main'>Main</Link>
    </div>
);
}

export default Header;
