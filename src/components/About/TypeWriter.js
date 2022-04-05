import React from 'react';
import Typed from 'typed.js';



const Type = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null)
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null)

    React.useEffect(() => {


        <p>
            I'm
            <span class="typed" data-typed-items="Javacript,iOS,Android">Javacript</span><span class="typed-cursor typed-cursor--blink">|</span>
             Developer
            </p>


        const options = {
            // strings that will be rendered for typewriter effect
            
         
            
            strings: [
                "I'm Israel Almeida",
                "Certified Tech Developer",
                'Student Digital House',
            ],


            typeSpeed: 100, // typeing speed will be 50ms
            backSpeed: 10, // typing backSpeed will be 10ms
            loop: true,
        }

        // elRef refers to the <h1 /> rendered below
        typed.current = new Typed(el.current, options)

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy()
        }
    }, [])

    return (
        <div className="">
            <h1 ref={el} style={{ display: 'inline' }} />
        </div>
    )
}

export default Type;

