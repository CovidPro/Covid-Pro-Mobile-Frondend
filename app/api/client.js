import axios from 'axios';

export default axios.create({ baseURL: 'https://covid-pro-mobile-backend-nu.vercel.app/' });
// export default axios.create({ baseURL: 'http://localhost:8000' });

global.foo = 'email';