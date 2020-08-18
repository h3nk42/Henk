import React from 'react'
import Drawer from "./Drawer";
import {ThemeProvider} from "@material-ui/core";
import theme from "../components/Theme";
import FullPage from "../components/fullPage";


export default function Home(props) {
    return (
        <div>
            <FullPage handleClick={props.schemeChanger} scheme={props.scheme}>
            </FullPage>
        </div>
    )
}