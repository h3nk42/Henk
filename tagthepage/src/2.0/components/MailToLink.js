import React from 'react';

import './MailToStyle.css'



function MailToLink(props){

    return(
        <div className="container">
            <div className="hover-container">
                <a href='mailto:henk.vandrsloot@gmail.com'><h1>Mail me!</h1></a>
            </div>
        </div>
    );
}

export default MailToLink