import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
*/

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
  }

  render() {
    return (
        <div className="App">
          <p className ="title">
            StockStupid
          </p>
        </div>
    );
  }
}


export default App;

{/*
"class App extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    if(e) e.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    });

    let term = this.state.value;
    const key = 'F41ON15LGCFM4PR7';
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;

    axios.get(url)
    .then(res => {
      console.log(res.data);
      let stocks = _.flattenDeep( Array.from(res.data['Stock Quotes']).map((stock) => [{symbol: stock['1. symbol'], price: stock['2. price'], volume: stock['3. volume'], timestamp: stock['4. timestamp']}]) );
      console.log(stocks);
      this.setState((state, props) => {
        return {
          ...state,
        stocks
        }
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    let stocks = this.state.stocks;
    const value = this.state.value;

    return (
      <div className="App">
        <h1 className="App__Title">Stock Search</h1>
        <SearchBar value={ value }
                   onChange={ this.handleChange }
                   onClick={ this.handleClick }/>
        <StockList stockItems={ this.state.stocks }/>
      </div>
    );
  }
}

export default App;
*/}