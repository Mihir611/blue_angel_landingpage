import Axios from "axios";

export const RequestData = async (configuration) => {
    const response = await Axios.request(configuration);
    return response.data;
}