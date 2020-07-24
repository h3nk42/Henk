import React from 'react';
import {Button} from "react-rainbow-components";




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
                <Button  onClick={this.handleClick}
                         label="otherpage"
                         variant="brand"
                         className="rainbow-m-around_medium">
                    Mint Coin
                </Button>
            </div>


        );
    }
}

SendCoinButton.propTypes = {};

export default SendCoinButton;
