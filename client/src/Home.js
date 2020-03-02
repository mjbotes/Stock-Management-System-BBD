import React from 'react';
import Nav from './Nav.js';
import './Style.scss';

function Home(Products) {
    var i = 0;
    var items = [];
    while (Products[0][i] > 0)
    {
        items.push(<tr>
                <td>{Products[1][i]}</td>
                <td>{Products[2][i]}</td>
                <td>{Products[3][i]}</td>
            </tr>);
        i++;
    }
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
            {items}
        </table>
    );
}

export default Home;