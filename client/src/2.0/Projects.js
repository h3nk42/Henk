import React from 'react'
import { ThemeProvider, Button} from "@material-ui/core";
import theme from "../components/Theme";
import '../App.css'


export default function Projects(props) {

    return (
        <div>
            <ThemeProvider theme={theme(props.scheme)}>
                <div style={{background: props.getColor(props.scheme)[0], minHeight:'100vh', minWidth: '100vw'}} className='xs:pl-5 pl-6 md:pr-2 pr-1 pt-2 pb-2 container-fluid flex flex-column items-start justify-start h-auto'>
                    <div className=' flex flex-row flex-row flex-wrap '>
                        <img className=' m-1  p-1 shadow-4 w-5/6 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 ' style={{background: props.getColor()[1]}} src={'https://i.ibb.co/42kbX5d/screenshot.png'}/>
                        <div style={{background: props.getColor()[1], height: '100%'}} className=' w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 sm:shadow-4 shadow-4 md:shadow-4 p-2 m-1 flex flex-column items-center justify-start flex-wrap'>
                            <h4 className='p-1 nameFont font-xs sm:font-sm'> shareYourPlant </h4>
                            <div className='p-1 textFont font-xs sm:font-xs flex flex-column items-center justify-center'>
                                <p>
                                    In this project I used the MERN stack to start working on my webApp idea in which you can share plants with other people in your city and discuss about taking care of your beloved green roommates.
                                </p>
                                <h4 className='pt-2'> <a href='https://h3nk42.github.io/ShareYourPlant/' > open demo  </a> </h4>
                                <h4 className='pt-2'> <a href='https://github.com/h3nk42/ShareYourPlant' > github repo  </a> </h4>
                            </div>
                        </div>
                        <div className='self-end' style={{width: '100px'}}>
                        <Button style={{outline:'none'}} className='mdc-button' onClick={props.schemeChanger}>
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label nameFont font-xs">change scheme</span>
                        </Button>
                        </div>
                    </div>
                    <div className=' flex mt-6 flex-row flex-row flex-wrap '>
                        <img className=' m-1  p-1 shadow-4 w-5/6 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 ' style={{background: props.getColor()[1]}} src={'https://i.ibb.co/rfS50xK/calendar.png'}/>
                        <div style={{background: props.getColor()[1]}} className=' w-full sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-1/5 sm:shadow-4 shadow-4 md:shadow-4 p-2 m-1 flex flex-column items-center justify-start flex-wrap'>
                            <h4 className='p-1 nameFont font-xs sm:font-sm'> everyDayCalendar </h4>
                            <div className='p-1 textFont font-xs sm:font-xs flex flex-column items-center justify-center'>
                                <p>
                                    Simple habit tracker to see if you managed to meditate every day in the last year ;-)
                                </p>
                                <h4 className='pt-2'> <a href='https://h3nk42.github.io/everydayCalendar/' > open demo  </a> </h4>
                                <h4 className='pt-2'> <a href='https://github.com/h3nk42/everydayCalendar' > github repo  </a> </h4>
                            </div>
                        </div>
                    </div>
                    <div className=' flex mt-6 flex-row flex-row flex-wrap '>
                        <img className=' m-1  p-1 shadow-4 w-5/6 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-3/5 ' style={{background: props.getColor()[1]}} src={'https://i.ibb.co/23SQ8hh/DApp.png'}/>
                        <div style={{background: props.getColor()[1]}} className=' w-full sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-1/5 sm:shadow-4 shadow-4 md:shadow-4 p-2 m-1 flex flex-column items-center justify-start flex-wrap'>
                            <h4 className='p-1 nameFont font-xs sm:font-sm'> Ethereum DApp </h4>
                            <div className='p-1 textFont font-xs sm:font-xs flex flex-column items-center justify-center'>
                                <p>
                                    Simple UI for an internal Token over Smart Contracts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}
