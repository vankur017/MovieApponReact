import React from "react";
import ReactDOM from "react-dom/client"
import {useState, useEffect} from "react"
import {Body} from "./Body"


/*
Head ->
    leftside-> Logo
    rightside -> Home, Tv Shows

Body ->
    search-bar
    cards container
    cards of movies
*/

const Header = () => {
    return (
        <div className="head">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8uywHUOOg_4fnqqNXnV7hwN7peeEfR8KGPoj80YJ87sT7StxvQPean9-iWJJ2ke19X4&usqp=CAU" alt ="Not present"/>
            </div>

            <div className ="nav-bar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Tv Shows</a></li>
                    <li><a href="">ContactUs</a></li>
                    <li><a href="">AboutUs</a></li>
                </ul>
            </div>
            

        </div>
    )
}



const Applayout= ()=>{

    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)

