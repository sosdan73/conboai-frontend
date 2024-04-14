import classes from './AppContents.module.css'
import React, {useEffect, useState} from 'react';
import Form from "../Form/Form";
import TextContainer from "../TextContainer/TextContainer";
import Snackbar from "../Snackbar/Snackbar";
import {useSnackbar} from "../context/SnackbarProvider";
import validator from "validator";
import {useLoader} from "../context/LoaderProvider";
import axios from "axios";

const AppContents = props => {
	const [state, setState] = useState({
		link: '',
		shortenedLink: '',
		linkSubmittable: false
	});
	const { openSnackbar } = useSnackbar();
	const { isLoading, setLoading } = useLoader();
	useEffect(() => {
		const linkSubmittable = validator.isURL(state.link) && !isLoading;
		setState(prevState => {
			return {...prevState, linkSubmittable}
		})
	}, [isLoading, state.link])

	const link = state.link;
	const shortenedLink = state.shortenedLink;

	const updateLink = (e) => {
		setState(prevState => {
			return {...prevState, link: e.target.value}
		})
	}
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		axios.post('http://localhost:3001/links/create', {
			originalUrl: state.link
		}).then(({data}) => {
			setState(prevState => {
				return {...prevState, shortenedLink: `http://localhost:3001/${data.result.shortenedId}`}
			})
			openSnackbar(data.message, data.type)
		}).catch(err => {
			console.error(err);
			openSnackbar(err.message, 'error')
		}).finally(() => {
			setLoading(false)
		})
	}

	return (
		<div className={classes.App}>
			<h1 className={classes.title}>Short your link!</h1>
			<p className={classes.description}>Paste your link below and use the shortened version of it</p>
			<Form
				value={link}
				linkSubmittable={state.linkSubmittable}
				placeholder="Paste in yout link"
				onChange={updateLink}
				onSubmit={submit}
			/>
			{shortenedLink && <TextContainer text={shortenedLink} />}
			<Snackbar />
		</div>
	)
}

export default AppContents