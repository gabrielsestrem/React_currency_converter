import React, { Component } from 'react';
import converter from './Converter.css'

// import { Container } from './styles';

export default class Converter extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currencyA_value: "",
      currencyB: 0,
    }
    this.convert = this.convert.bind(this);
  }

  convert() {
    let from_to = `${this.props.currencyA}_${this.props.currencyB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=y&apiKey=3e789a07172adccee1f1`
    fetch(url).then(res => {
      return res.json()
    }).then(json => {
      let rate = json[from_to].val;
      let currencyB_value = (parseFloat(this.state.currencyA_value) * rate).toFixed(2)
      this.setState({currencyB_value})
    })
  }


  render() {
    return (
      <div className="converter">
        <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
        <input type="text" onChange={(event)=> {this.setState({currencyA_value: event.target.value})}}></input>
        <input type="button" value="Convert" onClick={this.convert}></input>
        <h2>{this.state.currencyB_value}</h2>
      </div>
    )
  }
}
