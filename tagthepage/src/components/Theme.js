import {createMuiTheme} from "@material-ui/core";
import green from '@material-ui/core/colors/green'

function theme(props) {
    if (props === 3 ) {
        return(
        createMuiTheme({
            palette: {
                primary: {
                    light: '#DBBEA1',
                    main: '#DB7F67',
                    dark: '#A37B73',
                    contrastText: 'black'
                },
                secondary:{
                    main: '#DBBEA1',
                }
            }
        }) )
    }
    else if (props === 1) {
        return(
            createMuiTheme({
                palette: {
                    primary: {
                        light: '#FFAA00',
                        main: '#FF5400',
                        dark: '#FF7900',
                        contrastText: 'black'
                    },
                    secondary:{
                        main: '#DBBEA1',
                    }
                }
            }) )
    }
    else if (props === 2) {
        return(
            createMuiTheme({
                palette: {
                    primary: {
                        light: '#E7ECEF',
                        main: '#274C77',
                        dark: '#6096BA',
                        contrastText: 'white'
                    },
                    secondary:{
                        main: '#DBBEA1',
                    }
                }
            }) )
    }
}

export default theme;