import classes from './Form.module.css'
import React from 'react';
import {useLoader} from "../context/LoaderProvider";

const Form = ({value, linkSubmittable, placeholder, onChange, onSubmit}) => {
	const {isLoading} = useLoader();

	return (
		<form className={classes.Form} onSubmit={onSubmit}>
			<input
				className={classes.input}
				type="text"
				placeholder={placeholder}
				value={value}
				disabled={isLoading}
				onChange={onChange}
			/>
			<button
				className={classes.button}
				disabled={!linkSubmittable}
				type="submit"
			>
				{isLoading ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	)
}

export default Form