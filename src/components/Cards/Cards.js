import React from 'react';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import CountUp from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

const Values = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'NO RESPONSE';
	}

	return (
		<Grid container spacing={1} justify='center'>
			<Grid
				item
				component={Card}
				xs={6}
				md={2}
				className={cx(styles.card, styles.confirmed)}
			>
				<CardContent className={cx(styles.cardcontent)}>
					<Typography color='textSecondary' gutterBottom>
						Confirmed
					</Typography>
					<Typography variant='h5'>
						<CountUp
							start={0}
							end={confirmed.value}
							separator=','
							duration={1.5}
						/>
					</Typography>
					<Typography color='textSecondary'>
					Last update:
						{new Date(lastUpdate).toDateString()}
					</Typography>
				</CardContent>
			</Grid>

			<Grid
				item
				component={Card}
				xs={6}
				md={2}
				className={cx(styles.card, styles.active)}
			>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						Active
					</Typography>
					<Typography variant='h5'>
						<CountUp
							start={0}
							end={confirmed.value - recovered.value - deaths.value}
							separator=','
							duration={1.5}
						/>
					</Typography>
					<Typography color='textSecondary'>
					Last update:
						{new Date(lastUpdate).toDateString()}
					</Typography>
				</CardContent>
			</Grid>

			<Grid
				item
				component={Card}
				xs={6}
				md={2}
				className={cx(styles.card, styles.recovered)}
			>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						Recovered
					</Typography>
					<Typography variant='h5'>
						<CountUp
							start={0}
							end={recovered.value}
							separator=','
							duration={1.5}
						/>
					</Typography>
					<Typography color='textSecondary'>
					Last update:
						{new Date(lastUpdate).toDateString()}
					</Typography>
				</CardContent>
			</Grid>

			<Grid
				item
				component={Card}
				xs={6}
				md={2}
				className={cx(styles.card, styles.deaths)}
			>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						Deaths
					</Typography>
					<Typography variant='h5'>
						<CountUp
							start={0}
							end={deaths.value}
							separator=','
							duration={1.5}
						/>
					</Typography>
					<Typography color='textSecondary'>
						Last update:
						{new Date(lastUpdate).toDateString()}
					</Typography>
				</CardContent>
			</Grid>
		</Grid>
	);
};

export default Values;
