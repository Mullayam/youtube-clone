import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {      
        hl: 'en',
        gl: 'IN'
    },
    headers: {
        "X-RapidAPI-Key": '49090fa848msh7cd57eefb17b1f3p1f5874jsn01a786c342e2',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
