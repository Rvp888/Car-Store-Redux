
export const sellCar = (id) => {
    return {
        type: 'SELL_CAR',
        payload: id
    }
}

export const addCar = (payload) => {
    return {
        type: 'ADD',
        payload: payload
    }
}

