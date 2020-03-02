import React from 'react';
import Home from './Home';

function test() {
    let Products = [];
    Products[0] = [1, 2, 3, 4];
    Products[1] = ["This", "This2", "This3", "This4"];
    Products[2] = [13, 22, 33, 44];
    Products[3] = [11, 2, 3, 4];

    return(Home(Products));
}
export default test;