import React, {Component} from "react";
import {Button, ThemeProvider} from '@material-ui/core'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Drawer from "../2.0/Drawer";

import henk from '../henkShot2.png'
import schoolIcon from '../school-24px.svg'
import workIcon from '../work_outline-black-18dp.svg'

import '../App.css'
import MaterialButton from "./MaterialButton";

import theme from "./Theme";

class FullPage extends Component {

    constructor(props) {
        super(props);
    }


    returnColor() {
        if (this.props.scheme === 3) {
            return ['#DBBEA1','#DB7F67','#A37B73','#DB7F67', 'black']
        } else if (this.props.scheme === 2) {
            return ['#E7ECEF','#274C77','#6096BA','#274C77','#E7ECEF']
        } else {
            return  (['#FFAA00','#FF5400','#FF7900','#FF4800', 'black'] )
        }
    }

    render() {
            return (
                   <div className='flex flex-row'>

<ThemeProvider theme={theme(this.props.scheme)}>

                    <div style={{background: this.returnColor()[0], height: '5000px'}}
                         className='xs:pl-5 pl-6 container-fluid flex flex-column flex-wrap justify-start items-center w-auto h-screen'>
                        <div style={{background: this.returnColor()[0], height: '1.5%', minHeight: '50px', width: '95%'}} className='p-2 mb-1 sm:mb-5'><h2 style={{color:this.returnColor()[3]}}
                            className='fromRight nameFont font-xs md:font-xl lg:font-2xl'> HENK VAN DER SLOOT.</h2></div>
                        <div style={{background: this.returnColor()[0]}} className='flex flex-row flex-wrap justify-center w-full '>
                            <div style={{background: this.returnColor()[1], height: '400px', minHeight: '200px', minWidth: '350px'}}
                                 className='fadeIn mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-6-rows column-gap-5 row-gap-5'>
                                <div style={{background: this.returnColor()[1]}} className=' fadeIn column-start-3 column-end-6 row-start-6 flex items-end justify-end'>
                                    <Button style={{outline:'none'}} className='mdc-button' onClick={this.props.handleClick}>
                                        <div className="mdc-button__ripple"></div>
                                        <span className="mdc-button__label nameFont font-xs">change scheme</span>
                                    </Button>
                                    </div>
                                <div className='textFont column-start-1 column-end-6 row-start-1 row-end-5'>
                                    <p style={{color:this.returnColor()[4]}} className=' font-xs sm:font-xs md:font-xs lg:font-base'>I'm a software engineer studying applied computer science at HTW Berlin. In 2019 I started working with Ethereum and Smart Contracts which immediately sparked my
                                        interests in making the world a more decentralized space.
                                    </p>
                                </div>

                            </div>
                            <div style={{background: this.returnColor()[1], height: 'auto', minWidth: '250px'}}
                                 className='w-1/5 h-4/5 shadow-4 ml-2 grid p-2 fromRight'>
                                <img src={henk}></img>
                                {/*<p style={{color:this.returnColor()[4]}} className='font-xs sm:font-xs'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>*/}
                            </div>

                        </div>
                        <div style={{height:'7%'}}className=' fadeIn nameFont w-full flex flex-column justify-end items-center pb-5'>
                                    <h3 className=''>Work & Education</h3>
                        </div>
                        <div className='fadeIn'>
                        <VerticalTimeline >
                            <VerticalTimelineElement
                                className="vertical-timeline-element"
                                contentStyle={{background: this.returnColor()[1], color: 'black' }}
                                contentArrowStyle={{ borderRight: '20px solid '.concat(this.returnColor()[1])}}
                                date="2018 - 2020"
                                iconStyle={{ background: this.returnColor()[3], color: this.returnColor()[4] }}
                                icon={<img style={{ width: '60%',
                                    height: '60%',
                                    borderRadius: '50%',
                                    display: 'block',
                                    margin: '20%'
                                }} src={schoolIcon}></img>}
                            >
                                <h3 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-title">Informatik Bsc.</h3>
                                <h4 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-subtitle">Uni Leipzig</h4>
                                <p style={{color:this.returnColor()[4]}}>
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element"
                                contentStyle={{background: this.returnColor()[1], color:'black' }}
                                contentArrowStyle={{ borderRight: '20px solid '.concat(this.returnColor()[1])}}
                                date="2019 - 2020"
                                iconStyle={{ background: this.returnColor()[3], color: this.returnColor()[4] }}
                                icon={<img style={{ width: '60%',
                                    height: '60%',
                                    borderRadius: '50%',
                                    display: 'block',
                                    margin: '20%'
                                }} src={workIcon}></img>}
                            >
                                <h3 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-title">Software Engineer</h3>
                                <h4 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-subtitle">Exxeta GmbH, Leipzig</h4>
                                <p style={{color:this.returnColor()[4]}}>
                                    Werkstudent, eigenes Projekt: Ethereum, Smart-Contracts, React, NodeJS
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element"
                                contentStyle={{background: this.returnColor()[1], color:'black' }}
                                contentArrowStyle={{ borderRight: '20px solid '.concat(this.returnColor()[1])}}
                                date="2020 - present"
                                iconStyle={{ background: this.returnColor()[3], color: this.returnColor()[4]}}
                                icon={<img style={{ width: '60%',
                                    height: '60%',
                                    borderRadius: '50%',
                                    display: 'block',
                                    margin: '20%'
                                    }} src={schoolIcon}></img>}
                            >
                                <h3 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-title">angewandte Info.</h3>
                                <h4 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-subtitle">HTW Berlin</h4>
                                <p style={{color:this.returnColor()[4]}}> Bachelor fertig stellen
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                            <div className='border h-full flex flex-column items-center pt-2'>
                                <MaterialButton color={this.returnColor()[3]}/>
                            </div>
                        </div>
                    </div>
</ThemeProvider>
                   </div>


            )





    }
}

export default FullPage