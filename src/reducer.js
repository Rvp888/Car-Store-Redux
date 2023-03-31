

const initialState = [
    {
        id: 1,
        name: 'Nexon'
    },
    {
        id: 2,
        name: 'Swift'
    },
    {
        id: 3,
        name: 'Baleno'
    },
]


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