import React from 'react';

export interface ILogInProps {
}

function LogIn (props: ILogInProps) {
return (
    <div>
        <h1>Log In Form</h1>
        <form>
            <input type="text" placeholder="Log in"/>
            <input type="password" placeholder="password"/>
            <button>Log In</button>
        </form>
    </div>
);
}

export default LogIn;
