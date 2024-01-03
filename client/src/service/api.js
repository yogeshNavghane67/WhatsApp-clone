import axios from 'axios';

const url ='';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('Error while adduser API', error.message);
    }
} 