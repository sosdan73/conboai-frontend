import Header from "./components/Header/Header";
import ContextProvider from "./components/context/ContextProvider";
import AppContents from "./components/AppContents/AppContents";

function App() {
	return (
		<div>
			<Header />
			<ContextProvider>
				<AppContents />
			</ContextProvider>
		</div>
	);
}

export default App;
