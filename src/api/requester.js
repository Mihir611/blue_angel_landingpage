import Axios from "axios";

export const RequestData = (configuration) => {
    Axios.request(configuration).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    })
}