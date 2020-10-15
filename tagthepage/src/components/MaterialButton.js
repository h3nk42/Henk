import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';


export default function MaterialButton(props) {

    return(
        <Button style={{outline:'none'}} className='mdc-button' onClick={props.schemeChanger}>
            <div className="mdc-button__ripple"></div>
            <span className="mdc-button__label nameFont font-xs">change scheme</span>
        </Button>
    )
}