import React, { useState } from 'react';

export default function UserData(){

    const [users , setUsers] = useState([]);

    const addData = () => {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let pwd = document.getElementById('pwd');

        if(name.value != '' && email.value != '' && pwd.vaue != ''){

        }
        else{
            alert("enter values first!!");
        }

    };

    return(
        <div className='container'>

            <h2>React Dynamic Table</h2>

            <div className='user-data'>
                <h3>Username:</h3>
                <input type='text' id='name'/>
                <h3>Email ID:</h3>
                <input type='text' id='email'/>
                <h3>Password:</h3>
                <input type='password' id='pwd'/>
                <button onClick='addData()'>Submit</button>
            </div>

            <table className='user-table'>
                <thead>Users Data</thead>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Email-id</th>
                        <th>Password</th>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
