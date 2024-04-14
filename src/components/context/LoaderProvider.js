import React, { useState, createContext, useContext } from 'react';

export const LoaderContext = createContext(null);

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

	// Function to set loading state
	const setLoading = (loading) => {
		setIsLoading(loading);
	};

	return (
		<LoaderContext.Provider value={{ isLoading, setLoading }}>
			{children}
		</LoaderContext.Provider>
	);
};
