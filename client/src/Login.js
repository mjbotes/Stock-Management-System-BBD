import React from 'react';
import Nav from './Nav.js';
import './Style.scss';

function App() {
    return (
            <body>
                <h1>Login</h1>
                <br />
                <form action="" method="post">
                    <div class="loginform">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>
                        <button type="submit">Login</button><button>Forgot Password</button>
                    </div>
                </form>
            </body>
    );
}