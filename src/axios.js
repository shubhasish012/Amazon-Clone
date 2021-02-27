import axios from 'axios';

const instance = axios.create({
    //baseURL:'http://localhost:5001/myclone-467f4/us-central1/api' // THE API (cloud function) URL local
    baseURL:'https://us-central1-myclone-467f4.cloudfunctions.net/api' // THE API (cloud function) URL
});


export default instance;