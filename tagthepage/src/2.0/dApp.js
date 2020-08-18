import React from 'react'
import Drawer from "./Drawer";
import {Card, Grid, ThemeProvider} from "@material-ui/core";
import theme from "../components/Theme";
import FullPage from "../components/fullPage";
import {makeStyles} from "@material-ui/core/styles";
import ImgCard from "./components/ImgCard";




export default function DApp(props) {


    return (
        <div className='flex flex-row'>
            <ThemeProvider theme={theme(props.scheme)}>
                <div style={{background: props.getColor(props.scheme)[0], minHeight:'100vh'}} className='xs:pl-5 pl-6 md:pr-2  pr-1 pt-2 pb-2 container-fluid flex h-auto'>
                    <div className='h-auto'>
                    <Grid container spacing={2}  >
                        <Grid item xs={7} sm={4} md={3} lg={2}>
                            <ImgCard num={1} bgColor={props.getColor(props.scheme)[1]}/>
                        </Grid>
                        <Grid item xs={7} sm={4} md={3} lg={2}>
                            <ImgCard num={1} bgColor={props.getColor(props.scheme)[1]}/>
                        </Grid>
                        <Grid item xs={7} sm={4} md={3} lg={2}>
                            <ImgCard num={1} bgColor={props.getColor(props.scheme)[1]}/>
                        </Grid>
                         <Grid item xs={7} sm={4} md={3} lg={2}>
                             <ImgCard num={2} bgColor={props.getColor(props.scheme)[1]}/>
                         </Grid>
                         <Grid item xs={7} sm={4} md={3} lg={2}>
                             <ImgCard num={2} bgColor={props.getColor(props.scheme)[1]}/>
                         </Grid>
                         <Grid item xs={7} sm={4} md={3} lg={2}>
                             <ImgCard num={1} bgColor={props.getColor(props.scheme)[1]}/>
                         </Grid>
                    </Grid>
                    </div>

                </div>

            </ThemeProvider>
        </div>
    )
}