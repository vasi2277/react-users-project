import React from 'react'

import './style.css'

export default function Loader() {
    return (
        <div style={{marginLeft:"625px"}} >

            <div className="lds-facebook mt-5">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <h4>press the button to fetch!</h4>


        </div>
    )
}
