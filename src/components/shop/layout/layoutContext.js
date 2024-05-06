export const layoutState = {
    navberHamburger: false,
    loginSignupModal: false,
    loginSignupError: false,
    cartModal: false,
    cartProduct: null,
    singleProductDetail: null,
    inCart: null,
    cartTotalCost: null,
    orderSuccess: false,
    loading: false,
}

export const layoutReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}