import classes from './TextContainer.module.css'
import React from 'react';
import copy from "../../assets/copy.png"
import {useSnackbar} from "../context/SnackbarProvider";

const TextContainer = ({text}) => {
	const { openSnackbar } = useSnackbar();
	const copyLink = () => {
		navigator.clipboard.writeText(text);
		openSnackbar('Copied to clipboard!', 'info')
	}
	return (
		<div className={classes.TextContainer}>
			<a
				className={classes.link}
				href={text}
				target="_blank"
				rel="noreferrer"
			>
				{text}
			</a>
			<button
				className={classes.button}
				onClick={copyLink}
			>
				<img className={classes.image} src={copy} alt="copy" />
			</button>
		</div>
	)
}

export default TextContainer