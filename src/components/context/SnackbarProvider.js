import React, { useState, createContext, useContext } from 'react';

export const SnackbarContext = createContext();
export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
	const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'info' });

	const openSnackbar = (message, type = 'info') => {
		setSnackbar({ open: true, message, type });

		setTimeout(() => {
			setSnackbar({ open: false, message: '', type: 'info' });
		}, 7000);
	};

	return (
		<SnackbarContext.Provider value={{ snackbar, openSnackbar }}>
			{children}
		</SnackbarContext.Provider>
	);
};
