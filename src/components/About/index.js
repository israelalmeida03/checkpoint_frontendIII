import './style.css';
import React from 'react'
import TypeWriter from "./TypeWriter";
import Social from '../Social';


export default function About(){

    return(
        <>
        <main id="about" >
            <TypeWriter /> 
        </main>
        <div>
        <Social/> 
        </div>
        </>
    );
}



