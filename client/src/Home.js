import React from 'react';
import Nav from './Nav.js';
import './Style.scss';

function Home(Products) {
    var i = 0;
    var table = [];
    table.push(<tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>);
    while (Products[0][i] > 0)
    {
        table.push(<tr>
                <td>{Products[1][i]}</td>
                <td>{Products[2][i]}</td>
                <td>{Products[3][i]}</td>
            </tr>);
        i++;
    }
    return (
        <table>
            {table}
        </table> 
    );
}

export default Home;