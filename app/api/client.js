import axios from 'axios';

export default axios.create({ baseURL: 'https://covid-pro-mobile-backend.vercel.app/' });
// export default axios.create({ baseURL: 'http://localhost:8000' });

//https://covid-pro-mobile-backend.vercel.app/