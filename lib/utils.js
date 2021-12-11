import axios from 'axios';

export const fetchData = async (url) => {
  // Fetch data with an http request
  try {
    const res = await axios(url);
    const {data} = res;
    return data;
  } catch (err) {
    console.log(err);
  }
};
