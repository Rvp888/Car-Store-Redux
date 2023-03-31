

const initialState = {
    noOfCars: 50
}


const carReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'BUY_CAR':
            return state.noOfCars - 1;
        case 'SALE_CAR':
            return state.noOfCars + 1;
        default:
            return state;
    }

}