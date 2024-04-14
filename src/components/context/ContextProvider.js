import React from 'react';
import { SnackbarProvider } from './SnackbarProvider';
import { LoaderProvider } from './LoaderProvider';

const ContextProvider = ({ children }) => {
	return (
		<SnackbarProvider>
			<LoaderProvider>
				{children}
			</LoaderProvider>
		</SnackbarProvider>
	);
};

export default ContextProvider;
