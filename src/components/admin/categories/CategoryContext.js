export const categoryState = {
    categories: [],
    addCategoryModal: false,
    editCategoryModal: {
        modal: false,
        cId: null,
        des: "",
        status: ""
    },
    loading: false
}

export const categoryReducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}