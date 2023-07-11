import { configureStore } from '@reduxjs/toolkit'
import toursReducer from '../../scenes/_silce/tours.slice'

export const store = configureStore({
    reducer: {
        tours: toursReducer,
    },
})


export const { dispatch, getState } = store