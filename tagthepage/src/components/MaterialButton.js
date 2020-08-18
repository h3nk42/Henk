import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';


export default function MaterialButton(props) {

    const text = ['Click me please', 'I\'ve been clicked!']
    const [buttonText, setButtonText] = useState(text[0]);

    useEffect( () => {
        document.title = buttonText;
    });


    return(
        <Button color="primary" variant='contained' onClick={() => { buttonText === text[0] ? setButtonText(text[1]) : setButtonText(text[0]) } } >
            {buttonText}
        </Button>
    )
}