import React, { Component } from 'react';

import InputForm from './InputForm/InputForm.js';
import OutputForm from './OutputForm/OutputForm.js';
import List from './List/List.js';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moneyList: []
		};
	}

	updateList = (updatedMoneyList) => {
		this.setState({
			moneyList: updatedMoneyList
		});

		//FIXME: In react we cant use querySelector
		document.querySelector('.App__list').scrollTo(0, document.querySelector('.App__list').scrollHeight);
	};

	render() {
		const { moneyList } = this.state;
		const { updateList } = this;

		return (
			<div className={'App__content'}>
				<InputForm moneyList={moneyList} updateList={updateList} />
				<List moneyList={moneyList} updateList={updateList} />
				<OutputForm moneyList={moneyList} updateList={updateList} />
			</div>
		);
	}
}

export default Content;
