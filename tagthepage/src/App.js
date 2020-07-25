import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SendCoinButton from "./components/sendCoinButton";
import ShowBalance from "./components/ShowBalance";
import SendTagButton from "./components/sendTagButton";
import TagList from "./components/TagList";



const Web3 = require("web3");

const coinAbi = require('./coin.json');
const coinAddress = '0xbF18DaD17E3fC3A200857c0065F1D5Ac50D99Ebc'



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
        <p style={{color:'white'}} className='gFont1 font-xs sm:font-xs md:font-base lg:font-xl' > you're connected to robsten! </p>
      </div>
      )
    } else {
      return (
          <div>
            <p style={{color:'white'}} className='gFont1 font-xs sm:font-xs md:font-base lg:font-xl' > Please connect to robsten-network! </p>
          </div>
      )
    }
   }

  render() {
    return (
        <div className='flex-column h-screen'>
        <div style={{background:'DarkSlateGrey', height:'15%'}} className='container-fluid flex flex-row-reverse  w-screen  '>
          <div className='w-full text-center flex flex-column items-center justify-center'>
            <h3 className='neonpurple font-xs sm:font-sm md:font-base lg:font-3xl'>Tag my Page for just 1 coin! </h3>

          </div>

        </div>
          <div style={{background:'DarkSlateGrey'}} className='container-fluid flex flex-row  w-screen h-3/4 '>
            <div className='w-2/5 h-full  text-center p-2 flex flex-column'>
              <div>
              { this.state.enabled === false ?
              <p style={{color:'white'}} className='gFont1 font-xs sm:font-xs md:font-base lg:font-xl'> If you want to put your name on the wall, you'll need to connect your wallet! </p>
                :
                <p style={{color:'white'}} className='gFont1 font-xs sm:font-xs md:font-base lg:font-xl'> Your wallet is connected! </p>
                }
              </div>
            <div className='pt-2 sm:pt-5'>
              {this.returnPage()}
            </div>
              <div className='flex flex-column items-center justify-center pt-2 sm:pt-5'>
                {this.state.loading == false ?
                    <div className='flex flex-column items-center'>
                    <div className=' font-xs sm:font-xs'>
                      <SendCoinButton contract={this.state.coinContract} account={this.state.accounts[0]}></SendCoinButton>
                    </div>
                      <div style={{color:'white'}} className=' gFont1 font-xs sm:font-xs md:font-base lg:font-xl pt-2 sm:pt-5'>
                        <ShowBalance ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]}></ShowBalance>
                      </div>
                      <div>
                        <SendTagButton ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]}></SendTagButton>
                      </div>
                    </div>
                    :
                    <p>loading </p>}

              </div>


            </div>
          <div className='w-full h-full   p-2'>
            {this.state.loading == false ?
                <div className='  wrapper'>
                  <h5 className='neonred'> HENK </h5>
                  <TagList ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]} ></TagList>
                </div>
                :
                <p className='font-5xl text-center'> loading </p>}

          </div>
          </div>


          <div style={{background:'LightPink'}} className='container-fluid border w-screen h-screen flex-wrap flex flex-row'>
            <div className='w-1/2 h-1/2'></div>
            <div className='w-1/2 h-1/2'></div>
            <div className='w-1/4 h-1/2'></div>
            <div className='w-1/4 h-1/2'></div>
            <div className='w-1/4 h-1/2'></div>
            <div className='w-1/4 h-1/2'></div>
          </div>
        </div>

        /*
        <div className="App">
          <h1 className='md:font-2xl lg:font-5xl'> 5xl </h1>
          <h1 className='md:font-2xl lg:font-4xl'> 4xl </h1>
          <h1 className='md:font-2xl lg:font-3xl'> 3xl </h1>
          <h1 className='md:font-2xl lg:font-2xl'> 2xl </h1>
          <h1 className='md:font-2xl lg:font-xl'> xl </h1>
          <h1 className='md:font-2xl lg:font-lg'> lg </h1>
          <h1 className='md:font-2xl lg:font-base'> base </h1>
          <h1 className='md:font-2xl lg:font-sm'> sm </h1>
          <h1 className='md:font-2xl lg:font-xs'> xs </h1>

          <header className="App-header">
            <div className='Title'>
              <h3 className='neonpurple font-xs sm:font-sm md:font-base lg:font-3xl'>Tag my Page for just 1 coin! </h3>
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
              <div className='right container'>
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

         */
    );
  }
}

export default App;
