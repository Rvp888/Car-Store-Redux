

const initialState = {
    noOfCars: 50
}


export const carReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'BUY_CAR':
            return { noOfCars: state.noOfCars - 1 };
        case 'SALE_CAR':
            return { noOfCars: state.noOfCars + 1 };
        default:
            return state;
    }

}