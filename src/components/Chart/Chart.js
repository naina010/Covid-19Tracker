import React, { useState, useEffect } from 'react';

import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

import { fetchDailyData } from '../../api';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchDailyAPI = async () => {
			setDailyData(await fetchDailyData());
		};
		fetchDailyAPI();
	}, []);

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: 'Confirmed',
						borderColor: 'red',
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: 'Deaths',
						borderColor: 'black',
						fill: true,
					},
				],
			}}
		/>
	) : null;

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(252, 126, 126, 0.8)',
							'rgba(161, 242, 248, 0.8)',
							'rgba(170, 241, 201, 0.8)',
							'rgba(177, 192, 183, 0.8)',
						],
						data: [
							confirmed.value,
							confirmed.value - recovered.value - deaths.value,
							recovered.value,
							deaths.value,
						],
					},
				],
			}}
			options={{
				legend: { display: false },
			}}
		/>
	) : null;

	return (
		<div className={styles.container}>{country ? barChart : lineChart}</div>
	);
};

export default Chart;
