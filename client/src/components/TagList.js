import React, {Component} from 'react';
import './componentStyle.css';


class TagList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: '',
            loading: true,

        }
    }

    async loadData() {
        let _counter = await this.props.contract.methods.counter().call();

        let tags = [];
        for (let i = 0; i < _counter; i++) {
            let tag = await this.props.contract.methods.tagArray(i).call()
            tags.push(tag)
            console.log(tags);
        }
        this.setState({tags: tags});
        this.setState({loading: false});
    }

    componentDidMount() {
        this.loadData()
        this.props.ethereum.on('networkChanged', networkId => {
           this.loadData()});

    }

    renderList() {
        if (this.state.loading === false) {
            return ( <ul className='noDotList neonred '>{this.state.tags.map(tag => <li className='font-xs sm:font-sm md:font-base lg:font-3xl' key={tag}> {tag} </li>)} </ul>)

        }

    }


    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}


export default TagList