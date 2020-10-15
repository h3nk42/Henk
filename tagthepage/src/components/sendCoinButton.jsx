import React from 'react';


import '../App.css'



class SendCoinButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {

    }

    handleClick() {
        this.props.contract.methods.mint().send({from: this.props.account}).then ( (res,err) => {
        })
    }


    render() {
        return (
            <div style={{float: "left", marginRight: "20px"}}>
                <button  onClick={this.handleClick}>
                    Mint Coin
                </button>
            </div>


        );
    }
}

SendCoinButton.propTypes = {};

export default SendCoinButton;
