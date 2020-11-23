import SendCoinButton from "./sendCoinButton";
import ShowBalance from "./ShowBalance";
import SendTagButton from "./sendTagButton";
import TagList from "./TagList";
import React from "react";

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
        <h5 className='neonred text-center'> HENK </h5>
        {this.state.loading == false ?
            <div className='  wrapper'>

                <TagList ethereum={this.state.ethereum} contract={this.state.coinContract} account={this.state.accounts[0]} ></TagList>
            </div>
            :
            <p> loading </p>}

    </div>
</div>
