(this.webpackJsonptagthepage=this.webpackJsonptagthepage||[]).push([[0],{1637:function(e,t,n){},1648:function(e,t){},1657:function(e,t){},1674:function(e,t){},1676:function(e,t){},1691:function(e,t){},1692:function(e,t){},1694:function(e,t){},1695:function(e,t){},1771:function(e,t){},1773:function(e,t){},1782:function(e,t){},1784:function(e,t){},1809:function(e,t){},1811:function(e,t){},1817:function(e,t){},1818:function(e,t){},1821:function(e,t){},1837:function(e,t){},1840:function(e,t){},1845:function(e,t){},1856:function(e,t){},1859:function(e,t){},1911:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tag","type":"string"}],"name":"tag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tagArray","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},1912:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(99),s=n.n(r),o=(n(421),n(40)),u=n.n(o),c=n(66),l=n(16),p=n(18),d=n(22),y=n(21),m=(n(423),n(424),n(76)),h=n(139),f=function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){}},{key:"handleClick",value:function(){this.props.contract.methods.mint().send({from:this.props.account}).then((function(e,t){}))}},{key:"render",value:function(){return i.a.createElement("div",{style:{float:"left",marginRight:"20px"}},i.a.createElement(h.Button,{onClick:this.handleClick,label:"otherpage",variant:"brand",className:"rainbow-m-around_medium"},"Mint Coin"))}}]),n}(i.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={balance:"?"},a}return Object(p.a)(n,[{key:"loadBalance",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.contract.methods.balanceOf(this.props.account).call();case 2:t=e.sent,this.setState({balance:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadBalance(),this.props.ethereum.on("networkChanged",function(){var e=Object(c.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:3!==n&&t.setState({balance:"?"}),t.loadBalance();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null," your balance: ",this.state.balance))}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={tagToSend:"your tag"},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){this.setState({tagToSend:e.target.value})}},{key:"handleClick",value:function(){this.props.contract.methods.tag(this.state.tagToSend).send({from:this.props.account}).then((function(e,t){}))}},{key:"render",value:function(){return i.a.createElement("div",{style:{float:"left",marginRight:"20px"}},i.a.createElement("label",{style:{color:"white"},htmlFor:"test"}),i.a.createElement("br",{style:{clear:"both"}}),i.a.createElement("input",{id:"test",type:"text",name:"title",onChange:this.handleChange,value:this.state.tagToSend}),i.a.createElement(h.Button,{onClick:this.handleClick,label:"otherpage",variant:"brand",className:"rainbow-m-around_medium"},"Tag the Wall"))}}]),n}(i.a.Component),g=(n(1637),function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={tags:"",loading:!0},a}return Object(p.a)(n,[{key:"loadData",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t,n,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.contract.methods.counter().call();case 2:t=e.sent,n=[],a=0;case 5:if(!(a<t)){e.next=14;break}return e.next=8,this.props.contract.methods.tagArray(a).call();case 8:i=e.sent,n.push(i),console.log(n);case 11:a++,e.next=5;break;case 14:this.setState({tags:n}),this.setState({loading:!1});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"renderList",value:function(){if(!1===this.state.loading)return i.a.createElement("ul",{className:"noDotList neonred"},this.state.tags.map((function(e){return i.a.createElement("li",{key:e}," ",e," ")}))," ")}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderList())}}]),n}(a.Component)),w=n(1638),T=n(1911),k=function(e){Object(d.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={accounts:"",enabled:!1,networkId:"",coinContract:"",loading:!0,ethereum:""},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadWeb3();case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadWeb3",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t,n,a,i,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=window.ethereum).isMetaMask&&(console.log("wallet is Metamask!"),console.log(t)),this.setState({ethereum:t}),this.setState({networkId:t.networkVersion}),n=new w(t),console.log(n),e.next=8,t.request({method:"eth_requestAccounts"});case 8:a=e.sent,this.setState({accounts:a,enabled:!0}),i=new n.eth.Contract(T,"0x87e11B0514b2350d4c2557ED040ACF2072d8fb50"),this.setState({coinContract:i}),t.on("networkChanged",(function(e){r.setState({networkId:e}),console.log("network changed!"),console.log(t.networkVersion)}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"returnPage",value:function(){return 3==this.state.networkId?i.a.createElement("div",null,i.a.createElement("p",null," you're connected to Robsten! ")):i.a.createElement("div",null,i.a.createElement("p",null," PLEASE CONNECT TO ROBSTEN! "))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"Title"},i.a.createElement("h3",{className:"neonpurple"},"Tag my Page for just 1 coin! ")),i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"left"},this.returnPage(),0==this.state.loading?i.a.createElement("div",{className:"wrapper"},i.a.createElement(f,{contract:this.state.coinContract,account:this.state.accounts[0]}),i.a.createElement(b,{ethereum:this.state.ethereum,contract:this.state.coinContract,account:this.state.accounts[0]}),i.a.createElement(v,{ethereum:this.state.ethereum,contract:this.state.coinContract,account:this.state.accounts[0]})):i.a.createElement("p",null,"loading ")),i.a.createElement("div",{className:"right"},0==this.state.loading?i.a.createElement("div",{className:"wrapper"},i.a.createElement(g,{ethereum:this.state.ethereum,contract:this.state.coinContract,account:this.state.accounts[0]})):i.a.createElement("p",null,"loading ")))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},276:function(e,t){},416:function(e,t,n){e.exports=n(1912)},421:function(e,t,n){},423:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},424:function(e,t,n){},867:function(e,t){},868:function(e,t){}},[[416,1,2]]]);
//# sourceMappingURL=main.25d03788.chunk.js.map