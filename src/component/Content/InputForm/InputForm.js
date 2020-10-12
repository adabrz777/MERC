import React, { Component } from 'react';

import Options from './../Options.js';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//amount and currency of money on the actually adding item
			inputMoneyValue: 0,
			inputMoneyCurrency: 'USD'
		};
	}

	handleInputMoneyCurrencyChange = (e) => {
		let value = e.target.value;
		this.setState({
			inputMoneyCurrency: value
		});
	};

	handleInputMoneyValueChange = (e) => {
		let value = e.target.value;
		this.setState({
			inputMoneyValue: value
		});
	};

	handleAddSubmit = (e) => {
		e.preventDefault();

		let moneyList = this.props.moneyList;

		moneyList.push({
			currency: this.state.inputMoneyCurrency,
			value: this.state.inputMoneyValue
		});

        this.props.updateList(moneyList);
	};

	render() {
		const { inputMoneyValue, inputMoneyCurrency } = this.state;

		return (
			<form onSubmit={this.handleAddSubmit}>
				<p className={'App__input-info'}>Money you have:</p>
				<input
					className={'App__input-money-value'}
					type="number"
					step="1"
					value={inputMoneyValue}
					onChange={this.handleInputMoneyValueChange}
				/>
				<select
					className={'App__input-money-currency'}
					value={inputMoneyCurrency}
					onChange={this.handleInputMoneyCurrencyChange}
				>
					<Options />
				</select>
				<input className={'App__input-submit'} type="submit" value="ADD" />
			</form>
		);
	}
}

export default InputForm;
