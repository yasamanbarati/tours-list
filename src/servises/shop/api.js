import axios from "axios";
import { useEffect } from "react";
import { hasErrorAction, setToursDataAction, startLoadingAction } from "../../scenes/_silce/tours.slice";
import { dispatch } from "../../setup/redux/store";

export const fetchData = () => {
    dispatch(startLoadingAction())
    setTimeout(() => {
        axios.get('https://course-api.com/react-tours-project')
            .then(response => {
                dispatch(setToursDataAction(response.data))
            }).catch(e =>
                dispatch(hasErrorAction(e.message)))
    }, 2000);
}

export const useToursData = () => {
    useEffect(() => { fetchData() }, [])
}