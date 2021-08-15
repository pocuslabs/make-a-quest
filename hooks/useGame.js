import { createContext, useContext, useReducer, useCallback } from "react"

const initialState = {
	name: "",
	stories: []
};

export const GameContext = createContext(initialState);

const reducer = (state, action) => {
	switch (action.type) {
		case "set":
			return {...action.state};
		case "update":
			return {
				...state,
				...action.state
			};
		case "reset":
			return initialState;
		default:
			return state;
	}
};

export const GameContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setState = useCallback((field, newState) => {
		if (typeof field === "string" && typeof newState !== "undefined") {
			return dispatch({ 
				type: "update",
				state: {
					...state,
					[field]: newState
				}
			});
		} else if (typeof field === "object" && typeof newState === "undefined") {
			return dispatch({
				type: "update",
				state: newState
			});
		} else {
			throw new Error("setState takes a state object to merge with the state, or a field string and value pair.")
		}
	}, [state, dispatch]);

	const resetState = () => {
		return dispatch({ type: "reset" });
	}

	const value = {
		state,
		setState,
		resetState
	};

	return (
		<GameContext.Provider value={value}>{children}</GameContext.Provider>
	)
};

export const useGame = () => useContext(GameContext);

export default useGame;