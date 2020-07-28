import SendCoinButton from "./sendCoinButton";
import ShowBalance from "./ShowBalance";
import SendTagButton from "./sendTagButton";
import TagList from "./TagList";
import React, {Component} from "react";
import {MDCRipple} from '@material/ripple';
import {Button} from '@material-ui/core'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class FullPage extends Component {

    constructor(props) {
        super(props);
    }


    returnColor() {
        if (this.props.scheme === 3) {
            return ['#DBBEA1','#DB7F67','#A37B73','#504746', 'black']
        } else if (this.props.scheme === 2) {
            return ['#E7ECEF','#274C77','#6096BA','#504746','#E7ECEF']
        } else {
            return  (['#FFAA00','#FF5400','#FF7900','#FF4800', 'black'] )
        }
    }

    render() {
            return (
                <div className='flex-column h-screen w-screen'>
                    <div style={{background: this.returnColor()[0], height: '5000px'}}
                         className='container-fluid flex flex-column flex-wrap justify-start items-center w-auto h-screen'>
                        <div style={{background: this.returnColor()[0], height: '2.5%', width: '95%'}} className='p-5 '><h2 style={{color:this.returnColor()[3]}}
                            className='nameFont font-xs md:font-xl lg:font-2xl'> HENK VAN DER SLOOT</h2></div>
                        <div style={{background: this.returnColor()[0]}} className='flex flex-row flex-wrap justify-center w-full '>
                            <div style={{background: this.returnColor()[1], height: '400px', minHeight: '200px', minWidth: '350px'}}
                                 className=' mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-6-rows column-gap-5 row-gap-5'>
                                <div style={{background: this.returnColor()[1]}} className='column-start-3 column-end-6 row-start-6 flex items-end justify-end'>
                                    <Button style={{outline:'none'}} className='mdc-button' onClick={this.props.handlerr}>
                                        <div className="mdc-button__ripple"></div>
                                        <span className="mdc-button__label nameFont font-xs">change scheme</span>
                                    </Button>
                                    </div>
                                <div className='textFont column-start-1 column-end-6 row-start-1 row-end-5'>
                                    <p style={{color:this.returnColor()[4]}} className=' font-xs sm:font-xs md:font-base lg:font-xl'>I'm a software engineer studying applied computer science at HTW Berlin. In 2019 I started working with Ethereum and Smart Contracts which immediately sparked my
                                        interests in making the world a more decentralized space.
                                    </p>
                                </div>
                                <div style={{background:'black'}} className='button2 w-full h-full'></div>
                            </div>
                            <div style={{background: this.returnColor()[1], height: '500px', minWidth: '250px'}}
                                 className='w-1/5 h-4/5 shadow-4 ml-2 grid p-2'>
                                <p style={{color:this.returnColor()[4]}} className='font-xs sm:font-xs'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                            </div>

                        </div>
                        <VerticalTimeline style={{background:'black'}}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element"
                                contentStyle={{background: this.returnColor()[1], color: this.returnColor()[4] }}
                                contentArrowStyle={{ borderRight: '20px solid '.concat(this.returnColor()[1])}}
                                date="2019 - present"
                                iconStyle={{ background: this.returnColor()[3], color: this.returnColor()[4] }}
                            >
                                <h3 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-title">Creative Director</h3>
                                <h4 style={{color:this.returnColor()[4]}} className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                <p style={{color:this.returnColor()[4]}}>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>


            )





    }
}

export default FullPage