import React from 'react';
import {Button} from "react-rainbow-components";


class SendTagButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagToSend: "your tag",
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
            <div style={{float: "left", marginRight: "20px"}}>
                <label style = {{ color: "white"}} htmlFor="test"></label>
                <br style={{clear:"both"}} />
                <input id="test" type="text" name="title" onChange={this.handleChange} value={this.state.tagToSend}  />
                <Button  onClick={this.handleClick}
                         label="otherpage"
                         variant="brand"
                         className="rainbow-m-around_medium">
                    Tag the Wall
                </Button>
            </div>


        );
    }
}

SendTagButton.propTypes = {};

export default SendTagButton;
