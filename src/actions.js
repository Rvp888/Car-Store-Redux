
export const buyCar = (id) => {
    return {
        type: 'BUY_CAR',
        payload: id
    }
}

export const saleCar = (payload) => {
    return {
        type: 'SALE_CAR',
        payload: payload
    }
}

