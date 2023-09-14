import axios from "axios";
const BASE_URL = 'http://127.0.0.1:8001'

export const getALLjobitems = async () => {

    const response = await axios.get(`${BASE_URL}/employers/list_create-job/`)
    return response.data;

}
export const postJobdetail = async () => {

    const response = await axios.get(`${BASE_URL}/employers/list_create-job/`)
    return response.data;

}

export const getALLjoblists = async () => {

    const response = await axios.get(`${BASE_URL}/jobseeker/seeker-list/`)
    return response.data;
}


export const getALLjobid = async (id) => {

    const response = await axios.patch(`${BASE_URL}/employers/update-job/${id}`)
    return response.data;
}

