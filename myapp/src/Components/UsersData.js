import React from 'react';

export default function UserData(){
    return(
        <div className='container'>

            <h2>React Dynamic Table</h2>

            <div className='users'>
                <h3>Username:</h3>
                <input type='text' id='name'/>
                <h3>Email ID:</h3>
                <input type='text' id='name'/>
                <h3>Password:</h3>
                <input type='password' id='name'/>
            </div>

            <table>
                <thead>Users Data</thead>
            </table>

        </div>
    );
}
