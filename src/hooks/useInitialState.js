import React, { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const AddToCart = (payload) => {
        setState({
            ...state,
            cart:[...state.cart, payload]
        })
    }
    return {
        state, AddToCart
    }
}

export default useInitialState;