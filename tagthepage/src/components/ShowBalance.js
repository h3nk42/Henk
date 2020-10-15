import React, {Component} from 'react';
import SendCoinButton from "./sendCoinButton";


class ShowBalance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: '?',

        }
    }

    async loadBalance() {
        let _balance = await this.props.contract.methods.balanceOf(this.props.account).call();
        this.setState({balance: _balance});
    }

    async componentDidMount() {
        this.loadBalance()
        this.props.ethereum.on('networkChanged', async networkId => {
            if(networkId !== 3) {
                this.setState({balance:'?'});
            }
            this.loadBalance()
        })
    }


    render(){
            return(
                <div>
                    <p> your balance: {this.state.balance}</p>
                </div>
            );
        }
}


export default ShowBalance
