import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SendCoinButton from "./components/sendCoinButton";
import ShowBalance from "./components/ShowBalance";
import SendTagButton from "./components/sendTagButton";
import TagList from "./components/TagList";


const Web3 = require("web3");

const coinAbi = require('./coin.json');
const coinAddress = '0x87e11B0514b2350d4c2557ED040ACF2072d8fb50'



class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      accounts: '',
      enabled: false,
      networkId: '',
      coinContract: '',
      loading: true,
      ethereum:'',



    }
  }

  async componentDidMount() {
    await this.loadWeb3()
    this.setState({loading:false})
  }

  async loadWeb3() {
    let ethereum = window.ethereum;

    if (ethereum.isMetaMask) {
      console.log('wallet is Metamask!');
      console.log(ethereum);
    }

    this.setState({ethereum:ethereum});

    this.setState({networkId: ethereum.networkVersion})


    let web3 = new Web3(ethereum);
    console.log(web3);

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    this.setState({accounts:accounts, enabled: true})

    const coinContract = new web3.eth.Contract(coinAbi, coinAddress);
    this.setState({coinContract: coinContract})

    ethereum.on('networkChanged', networkId => {
      this.setState({networkId})
      console.log('network changed!')
      console.log(ethereum.networkVersion)
    })


  }

  returnPage(){
    if (this.state.networkId == 3) {
      return (
      <div>
        <p> you're connected to Robsten! </p>
      </div>
      )
    } else {
      return (
          <div>
            <p> PLEASE CONNECT TO ROBSTEN! </p>
          </div>
      )
    }
   }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className='Title'>
              <h3 className='neonpurple'>Tag my Page for just 1 coin! </h3>
            </div>
            <div className='body'>
              <div className='left'>
              {this.returnPage()}
                {this.state.loading == false ?
                    <div className='wrapper'>
                      <SendCoinButton contract={this.state.coinContract} account={this.state.accounts[0]}></SendCoinButton>
                      <ShowBalance ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]}></ShowBalance>
                      <SendTagButton ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]}></SendTagButton>
                      </div>
                :
                <p>loading </p>}

              </div>
              <div className='right'>
                {this.state.loading == false ?
                    <div className='wrapper'>
                      <TagList ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]} ></TagList>

                    </div>
                    :
                    <p>loading </p>}


              </div>
            </div>
          </header>
        </div>
    );
  }
}

export default App;
