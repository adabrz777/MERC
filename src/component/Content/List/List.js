import React, { Component } from 'react';

import Item from './Item.js';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	deleteItem = (x) => {
		let moneyList = this.props.moneyList.filter((i, key) => {
			if (key !== x) return i;
			else return null;
		});

		this.props.updateList(moneyList);
	};

	render() {
		let { moneyList } = this.props;

		if (moneyList.length > 0)
			moneyList = moneyList.map((i, key) => (
				<Item value={i.value} currency={i.currency} nr={key} key={key} deleteItem={this.deleteItem} />
			));

		return <ul className={'App__list'}>{moneyList}</ul>;
	}
}

export default List;
