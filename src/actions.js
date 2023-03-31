
export const buyCar = (id) => {
    return {
        type: 'BUY_CAR',
        payload: id
    }
}

export const saleCar = () => {
    return {
        type: 'SALE_CAR'
    }
}

