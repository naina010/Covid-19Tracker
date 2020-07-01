import React, { Component } from 'react';

import { Cards, CountrySelector, Chart } from './components';

import styles from './App.module.css';
import { fetchData } from './api/';

export default class App extends Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data });
		console.log(data);
	}	

	handleCountryChange = async (country) => {
		const data = await fetchData(country);
		this.setState({ data, country: country });
	}

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<span>
					<h1 style={{ color: 'gray', float: 'left' }}>COVID</h1>
					<h1 style={{ float: 'left' }}>-19</h1>
				</span>
				<Cards data={data} />
				<CountrySelector handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}
