import React from 'react';
import axios from 'axios';
import {LogInForm} from '../../classes/LogInForm';

function LogIn (form: LogInForm) {
    async function logIn (data: LogInForm) {
        console.log(data);

        axios.post(`http://ilfa.dp.ua:8080/user/`, {
            data: {
                form: data.getJSON()
            },
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
        .then(function(responce) {
            console.log(responce);
        })
        .catch(function(error) {
            console.log("error:", error);
        })
    }

    

    return (
        <div>
            <h1>Log In Form</h1>
            <form onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    phone: { value: string };
                    pass: { value: string };
                };
                const data: LogInForm = new LogInForm(target.phone.value, target.pass.value);
                logIn(data);
            }}>
                <input type="text"     name="phone" placeholder="Telephone"/>
                <input type="password" name="pass"  placeholder="Password"/>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
