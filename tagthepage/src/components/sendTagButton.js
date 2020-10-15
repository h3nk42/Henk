import React from 'react';
import '../App.css'

import './tagInputStyle.css'


class SendTagButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagToSend: "..",
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({tagToSend: event.target.value})
    }

    handleClick() {
        this.props.contract.methods.tag(this.state.tagToSend).send({from: this.props.account }).then ( (res,err) => {
        })
    }


    render() {


        return (
                <div>
                <input className='effect-1'  maxlength="7" placeholder='placehold' type="text" name="title" onChange={this.handleChange} value={this.state.tagToSend}  />
                    <span className="focus-border"></span>
                <button  onClick={this.handleClick}>

                    tag
                </button>
                </div>



        );
    }
}

SendTagButton.propTypes = {};

export default SendTagButton;
