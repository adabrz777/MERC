import React from 'react';
import './App.css';

import Content from './component/Content/Content.js';
import Information from './component/Information.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Content />
				<Information />
			</div>
		);
	}
}

export default App;
