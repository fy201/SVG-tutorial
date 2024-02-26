'use strict';
import {GCD} from './math.js';
import Book from './Book.js'
console.log(GCD(84,52));
let book= new Book("programming", "author");
book.tittle="java";
book.author="pascal";
book.loan();
console.log(book);
function function1 (a, b){
    return a+b;
}

let fuction3=(a,b)=>a+b;