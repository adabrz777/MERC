import React, { Component } from 'react';

import Options from './../Options.js';
import {BASIC_API_URL} from './../../../utils.js';

class Output extends Component {
	constructor(props) {
		super(props);
		this.state = {
            outputMoneyCurrency: 'USD',
            BASIC_API_URL: BASIC_API_URL
		};
	}

	handleOutputMoneyCurrencyChange = (e) => {
		let value = e.target.value;
		this.setState({
			outputMoneyCurrency: value
		});
	};

	handleCalculationSubmit = (e) => {
		e.preventDefault();

		fetch(`${this.state.BASIC_API_URL}latest?base=${this.state.outputMoneyCurrency}`)
			.then((data) => data.json())
			.then((data) => data.rates)
			.then((data) => {
				let moneyList = this.props.moneyList,
					value = 0;

				for (let i = 0; i < moneyList.length; i++) {
					value += moneyList[i].value * 1 / data[moneyList[i].currency];
				}

				value = value.toFixed(2);

				let result = {
					currency: this.state.outputMoneyCurrency,
					value: value
				};

				moneyList = [ result ];

				this.props.updateList(moneyList);
			})
			.catch((err) => console.log(err));
	};

	render() {
		const { outputMoneyCurrency } = this.state;

		return (
			<form className={'App__output-form'} onSubmit={this.handleCalculationSubmit}>
				<span className={'App__output-info'}>To: </span>
				<select
					className={'App__output-money-currency'}
					value={outputMoneyCurrency}
					onChange={this.handleOutputMoneyCurrencyChange}
				>
					<Options />
				</select>
				<input className={'App__output-submit'} type="submit" value="SUBMIT" />
			</form>
		);
	}
}

export default Output;
