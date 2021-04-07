import React, { createContext, useContext } from "react";

const CounterContext = createContext();

const ContextProvider = ({children}) => {
	const [counter, setCounter] = React.useState(0)

	const incCounter = () => {
		setCounter(counter + 1)
	}

	const decCounter = () => {
		setCounter(counter - 1)
	}

	return (
		<CounterContext.Provider value={{
			counter,
			incCounter,
			decCounter
		}}>
			{children}
		</CounterContext.Provider>
	)
}

const Counter = () => {
	const { counter, incCounter, decCounter } = useContext(CounterContext);
	return (
		<>
		<h3>Counter : {counter}</h3>
		<button onClick={incCounter}>inc</button>
		<button onClick={decCounter}>dec</button>
		</>
	)
}

const Header = () => {
	const { counter } = useContext(CounterContext);
	return (
		<h1>Header counter: {counter}</h1>
	)
}

export default function App() {
  return (
		<ContextProvider>
		<Header />
		<Counter />
		</ContextProvider>
	);
}
