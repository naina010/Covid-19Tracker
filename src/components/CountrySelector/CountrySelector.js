import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountrySelector.module.css';
import cx from 'classnames';

const Countries = ({ handleCountryChange }) => {
	const [countries, setCountries] = useState([]);

	// useEffect(() => {
	// 	setCountries(fetchCountries());
	// }, []);

	useEffect(() => {
		const fetchAPI = async () => {
			setCountries(await fetchCountries());
		};

		fetchAPI();
	}, []);

	return (
		<FormControl className={cx(styles.formControl)}>
			<NativeSelect
				defaultValue=''
				onChange={(e) => handleCountryChange(e.target.value)}
			>
				<option value=''>Global</option>
				{countries.map((country, i) => (
					<option value={country} key={i}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default Countries;
