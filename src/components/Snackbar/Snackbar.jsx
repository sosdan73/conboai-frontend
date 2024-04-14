import classes from './Snackbar.module.css'
import React from 'react';
import {useSnackbar} from "../context/SnackbarProvider";

const Snackbar = () => {
	const {snackbar} = useSnackbar();
	const snackbarStyles = {
		visibility: snackbar.open ? 'visible' : 'hidden',
		transform: snackbar.open ? 'translateX(-50px)' : 'translateX(0px)',
	}
	const snackbarClasses = (type) => {
		return `${classes.Snackbar} ${classes[`type-${type}`]}`;
	}
	return (
		<div
			className={snackbarClasses(snackbar.type)}
			style={snackbarStyles}
		>
			{snackbar.message}
		</div>
	)
}

export default Snackbar