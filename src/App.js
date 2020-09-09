import React from 'react';
import './App.css';
import Item from './Item.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			BASIC_API_URL: 'https://api.exchangeratesapi.io/',

			//INPUT
			moneyList: [],

			//amount and currency of money on the actually adding item
			inputMoneyValue: 0,
			inputMoneyCurrency: 'USD',

			//OUTPUT
			outputMoneyCurrency: 'USD'
		};
	}

	handleAddSubmit = (e) => {
		e.preventDefault();

		let moneyList = this.state.moneyList;

		moneyList.push({
			currency: this.state.inputMoneyCurrency,
			value: this.state.inputMoneyValue
		});

		this.setState(
			{
				moneyList: moneyList
			},
			() => {
				document.querySelector('.App__list').scrollTo(0, document.querySelector('.App__list').scrollHeight);
			}
		);
	};

	handleCalculationSubmit = (e) => {
		e.preventDefault();

		fetch(`${this.state.BASIC_API_URL}latest?base=${this.state.outputMoneyCurrency}`)
			.then((data) => data.json())
			.then((data) => data.rates)
			.then((data) => {
				let moneyList = this.state.moneyList,
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

				this.setState({
					moneyList: moneyList
				});
			})
			.catch((err) => console.log(err));
	};

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

	handleOutputMoneyCurrencyChange = (e) => {
		let value = e.target.value;
		this.setState({
			outputMoneyCurrency: value
		});
	};

	deleteItem = (x) => {
		let moneyList = this.state.moneyList.filter((i, key) => {
			if (key !== x) return i;
			else return null;
		});

		this.setState({
			moneyList: moneyList
		});
	};

	render() {
		const { inputMoneyValue, inputMoneyCurrency, outputMoneyCurrency } = this.state,
			optionList = (
				<React.Fragment>
					<option value="USD">USD US dollar </option>
					<option value="EUR">EUR Europe euro </option>
					<option value="JPY">JPY Japanese yen </option>
					<option value="BGN">BGN Bulgarian lev </option>
					<option value="CZK">CZK Czech koruna </option>
					<option value="DKK">DKK Danish krone </option>
					<option value="GBP">GBP Pound sterling </option>
					<option value="HUF">HUF Hungarian forint </option>
					<option value="PLN">PLN Polish zloty </option>
					<option value="RON">RON Romanian leu </option>
					<option value="SEK">SEK Swedish krona </option>
					<option value="CHF">CHF Swiss franc </option>
					<option value="ISK">ISK Icelandic krona </option>
					<option value="NOK">NOK Norwegian krone </option>
					<option value="HRK">HRK Croatian kuna </option>
					<option value="RUB">RUB Russian rouble </option>
					<option value="TRY">TRY Turkish lira </option>
					<option value="AUD">AUD Australian dollar </option>
					<option value="BRL">BRL Brazilian real </option>
					<option value="CAD">CAD Canadian dollar </option>
					<option value="CNY">CNY Chinese yuan renminbi </option>
					<option value="HKD">HKD Hong Kong dollar </option>
					<option value="IDR">IDR Indonesian rupiah </option>
					<option value="ILS">ILS Israeli shekel </option>
					<option value="INR">INR Indian rupee </option>
					<option value="KRW">KRW South Korean won</option>
					<option value="MXN">MXN Mexican peso </option>
					<option value="MYR">MYR Malaysian ringgit </option>
					<option value="NZD">NZD New Zealand dollar </option>
					<option value="PHP">PHP Philippine peso </option>
					<option value="SGD">SGD Singapore dollar </option>
					<option value="THB">THB Thai baht </option>
					<option value="ZAR">ZAR South African rand </option>
				</React.Fragment>
			);

		let moneyList = this.state.moneyList;

		moneyList =
			moneyList.length > 0
				? moneyList.map((i, key) => (
						<Item value={i.value} currency={i.currency} nr={key} key={key} delete={this.deleteItem} />
					))
				: null;

		return (
			<div className="App">
				<div className={'App__content'}>
					<p className={'App__input-info'}>Money you have:</p>

					<form onSubmit={this.handleAddSubmit}>
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
							{optionList}
						</select>
						<input className={'App__input-submit'} type="submit" value="ADD" />
					</form>

					<ul className={'App__list'}>{moneyList}</ul>

					<form className={'App__output-form'} onSubmit={this.handleCalculationSubmit}>
						<span className={'App__output-info'}>To: </span>
						<select
							className={'App__output-money-currency'}
							value={outputMoneyCurrency}
							onChange={this.handleOutputMoneyCurrencyChange}
						>
							{optionList}
						</select>
						<input className={'App__output-submit'} type="submit" value="SUBMIT" />
					</form>
				</div>
				<div className={'App__info'}>
					Actually exchange rate taken from: <a href="https://exchangeratesapi.io/">here</a>
					<br />
					Adam Brzeziński | <a href="https://www.linkedin.com/in/adamb777/">LinkedIn</a> | 2020<br />
					You can check code: <a href="https://github.com/adabrz777/MERC">here</a>
				</div>
			</div>
		);
	}
}

export default App;
