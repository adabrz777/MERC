import React, { Component } from 'react';

class Information extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={'App__info'}>
				Actually exchange rate taken from: <a href="https://exchangeratesapi.io/">here</a>
				<br />
				Adam Brzeziński | <a href="https://www.linkedin.com/in/adamb777/">LinkedIn</a> | 2020<br />
				You can check code: <a href="https://github.com/adabrz777/MERC">here</a>
			</div>
		);
	}
}

export default Information;
