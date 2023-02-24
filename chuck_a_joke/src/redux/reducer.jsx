const initialState = {
    likedJokes: [],
    dislikedJokes: [],
    searchHistory: []
}

export default function Reducer(state = initialState, action)
{   
    switch (action.type) {
        case "ADD_TO_LIKED_JOKES":
            return {
                ...state,
                likedJokes: [...state.likedJokes, action.payload]
            }
        case "ADD_TO_DISLIKED_JOKES":
            return {
                ...state,
                dislikedJokes: [...state.dislikedJokes, action.payload]
            }
        case "REMOVE_FROM_LIKED_JOKES":
            return {
                ...state,
                likedJokes: state.likedJokes.filter(joke => joke !== action.payload)
            }
        case "REMOVE_FROM_DISLIKED_JOKES":
            return {
                ...state,
                dislikedJokes: state.dislikedJokes.filter(joke => joke !== action.payload)
            }
        
        case "ADD_SEARCH_QUERY":
            const storedSearchHistory = [action.payload, ...state.searchHistory.slice(0, 5)]
            return {
                ...state,
                searchHistory: storedSearchHistory
            }

        default:
            return state;

    }
}
        
