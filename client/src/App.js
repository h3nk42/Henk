import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SendCoinButton from "./components/sendCoinButton";
import ShowBalance from "./components/ShowBalance";
import SendTagButton from "./components/sendTagButton";
import TagList from "./components/TagList";
import FullPage from "./components/fullPage";
import NavDrawer from "./components/NavDrawer";
import GoogleDraw from "./components/GoogleDraw";




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
      colorScheme: 3,



    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.colorScheme < 3) {
      this.setState({colorScheme:this.state.colorScheme + 1})
    } else (this.setState({colorScheme:1}))
  }

  returnPage() {
    if(this.state.colorScheme == 1) {
      return
    }
  }

  async componentDidMount() {
    await this.loadWeb3()
    this.setState({loading:false})
  }

  async loadWeb3() {

    if (window.ethereum) {


      let ethereum = window.ethereum;

      if (ethereum.isMetaMask) {
        console.log('wallet is Metamask!');
        console.log(ethereum);
      }

      this.setState({ethereum: ethereum});

      this.setState({networkId: ethereum.networkVersion})


      let web3 = new Web3(ethereum);
      console.log(web3);

      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      this.setState({accounts: accounts, enabled: true})

      const coinContract = new web3.eth.Contract(coinAbi, coinAddress);
      this.setState({coinContract: coinContract})

      ethereum.on('networkChanged', networkId => {
        this.setState({networkId})

        console.log('network changed!')
        console.log(ethereum.networkVersion)
      })

    }
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

  returnColor() {
    if (this.state.colorScheme === 3) {
      return ['#DBBEA1','#DB7F67','#A37B73','#DB7F67', 'black']
    } else if (this.state.colorScheme === 2) {
      return ['#E7ECEF','#274C77','#6096BA','#274C77','#E7ECEF']
    } else {
      return  (['#FFAA00','#FF5400','#FF7900','#FF4800', 'black'] )
    }
  }

   returnPage2(){
     if(this.state.colorScheme === 1)
     {
       return (<div className=' flex-row flex h-screen w-screen' >

         <FullPage handlerr={this.handleClick} scheme={1}/>
       </div>)
     }
     else if (this.state.colorScheme === 2) {
       return (<div className=' flex-row flex h-screen w-screen' >

         <FullPage handlerr={this.handleClick} scheme={2}/>
       </div>)
     }
     else { return (<div className='flex-row flex h-screen w-screen' >

       <FullPage handlerr={this.handleClick} scheme={3}/>
     </div>)}
     }

  render(){
  return (<div>

          {this.returnPage2()}

      </div>
  )
  }

}

export default App;
