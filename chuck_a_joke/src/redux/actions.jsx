export const addToLikedJokes = (joke) => {
    return {
        type: 'ADD_TO_LIKED_JOKES',
        payload: joke
    }
}

export const addToDislikedJokes = (joke) => {
    return {
        type: 'ADD_TO_DISLIKED_JOKES',
        payload: joke
    }
}

export const removeFromLikedJokes = (joke) => {
    return {
        type: 'REMOVE_FROM_LIKED_JOKES',
        payload: joke
    }
}

export const removeFromDislikedJokes = (joke) => {
    return {
        type: 'REMOVE_FROM_DISLIKED_JOKES',
        payload: joke
    }
}

export const addSearchQuery = (query) => {
    return {
        type: 'ADD_SEARCH_QUERY',
        payload: query
    }
}




