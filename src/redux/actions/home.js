import {
	HANDLE_CHANGE
} from "../../constants/actionTypes";

export default function changeCountry(data){
    return{
        type: HANDLE_CHANGE,
        payload:data
    }
}