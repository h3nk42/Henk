import React, {useState} from 'react'
import Drawer from "./Drawer";
import {Box, ThemeProvider} from "@material-ui/core";
import theme from "../components/Theme";
import FullPage from "../components/fullPage";


export default function Contact(props) {

    const returnColor = () => {
        if (props.scheme === 3) {
            return ['#DBBEA1','#DB7F67','#A37B73','#DB7F67', 'black']
        } else if (props.scheme === 2) {
            return ['#E7ECEF','#274C77','#6096BA','#274C77','#E7ECEF']
        } else {
            return  (['#FFAA00','#FF5400','#FF7900','#FF4800', 'black'] )
        }
    }

    return (

            <ThemeProvider theme={theme(props.scheme)}>
        <div style={{background: returnColor()[0], height: '1000px'}}
             className='xs:pl-5 pl-6 container-fluid flex flex-column flex-wrap justify-start items-center w-screen h-screen'>

            <div style={{ height: '200px', minHeight: '200px', minWidth: '350px'}} className='flex flex-column justify-center '> <h2> CONTACT ME! </h2> </div>

            <div style={{background: returnColor()[1], height: '400px', minHeight: '200px', minWidth: '350px'}}
                 className='fadeIn mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-6-rows column-gap-5 row-gap-5'>
                <div style={{background: returnColor()[2]}} className=' fadeIn column-start-1 column-end-3 row-start-1 flex items-end justify-end flex flex-column
                justify-center items-center'>
                    <p>henk.vandrslootATgmailDOTcom</p>
                </div>

                <div style={{background: returnColor()[2]}} className=' fadeIn column-start-2 column-end-4 row-start-3 flex items-end justify-end flex flex-column
                justify-center items-center'>
                    <p>https://github.com/h3nk42</p>
                </div>

                <div style={{background: returnColor()[2]}} className=' fadeIn column-start-3 column-end-6 row-start-5 flex items-end justify-end flex flex-column
                justify-center items-center'>
                    <p>www.linkedin.com/in/henk-van-der-sloot-7a06581b4
                    </p>
                </div>

            </div>
        </div>
            </ThemeProvider>

    )
}