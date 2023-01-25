import axios from 'axios';
axios.defaults.baseURL = 'https://yesno.wtf/';

export const fetchStatus = async () => {
  try {
    const response = await axios('/api');
    return response.data.answer;
  } catch (error) {
    console.log(error);
  }
};
