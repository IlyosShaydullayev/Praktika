export const homeState = {
    loading: false,
    sliderImages: [
        {url: '/Screenshot (4).png'},
        {url: '/Screenshot (5).png'},
        {url: '/Screenshot (6).png'},
        {url: '/Screenshot (7).png'},
    ],
    products: null,
    categoryListDropdown: false,
    filterListDropdown: false,
    searchDropdown: false
}

export const homeReducer = (state, action) => {
    switch(action.type){
        default :
            return state
    }
}