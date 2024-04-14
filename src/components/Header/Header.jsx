import classes from './Header.module.css'
import React from 'react';

const Header = props => {
	return (
		<header className={classes.Header}>
			<span className="logo">Conbo link shortener</span>
		</header>
	)
}

export default Header