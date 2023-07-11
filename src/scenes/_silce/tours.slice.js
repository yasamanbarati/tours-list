/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toursList: [],
    List: [],
    isLoading: false,
    error: false,
}

const setToursData = (state, action) => {
    state.toursList = action.payload
    state.isLoading = false;
}
const startLoading = (state) => {
    state.isLoading = true;
}
const hasError = (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
}
const removeTourCard = (state, action) => {
    state.List = state.toursList;
    const item = state.List.findIndex((item) => { return item.id === action.payload });
    state.List.splice(item, 1);
    // state.toursList = state.toursList.filter((tours, index) => {
    //     return index !== item
    // })
}
const ToursDataProject = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        setToursData,
        startLoading,
        hasError,
        removeTourCard,
    }
})
export const {
    setToursData: setToursDataAction,
    startLoading: startLoadingAction,
    hasError: hasErrorAction,
    removeTourCard: removeTourCardAction,
} = ToursDataProject.actions

export default ToursDataProject.reducer