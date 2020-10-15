import React, {useState} from "react";
import Home from "./Home";

import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
import DApp from "./dApp";
import Contact from "./Contact";


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: 'row',

    }
});

export default function App() {

    const [scheme, setScheme] = useState(3)

    const schemeChanger = () => {
        if(scheme < 3) {
            setScheme(scheme + 1)
        } else setScheme(1)
    }

    const returnColor = () => {
        if (scheme === 3) {
            return ['#DBBEA1','#DB7F67','#A37B73','#DB7F67', 'black']
        } else if (scheme === 2) {
            return ['#E7ECEF','#274C77','#6096BA','#274C77','#E7ECEF']
        } else {
            return  (['#FFAA00','#FF5400','#FF7900','#FF4800', 'black'] )
        }
    }

    const classes = useStyles();
    return (
        <div className={classes.container} style={{overflowX:"hidden"}} id='scrollTopDiv'>
            <Drawer color={returnColor()[0]}/>
            <Switch>
                <Route exact from="/DeeApp" render={props => <Home schemeChanger={schemeChanger} scheme={scheme} {...props} />} />
                <Route exact from="/dApp" render={props => <DApp getColor={returnColor} schemeChanger={schemeChanger} scheme={scheme} {...props} />} />
                <Route exact from="/Contact" render={props => <Contact schemeChanger={schemeChanger} scheme={scheme} {...props} />} />
            </Switch>
        </div>
    );
}

