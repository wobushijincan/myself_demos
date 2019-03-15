
const reducer = (state, action) => {
    if(!state) {
        return {
            themeColor: 'red',
            dbosData: null,
            currentList: null
        }
    }
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor};
        case "GET_LASTtASK":
            return { ...state, dbosData: action.dbosData };
            case "GET_CHECKLIST":
                return { ...state, currentList: action.currentList };
        default:
            return state;
    }
}

export default reducer;