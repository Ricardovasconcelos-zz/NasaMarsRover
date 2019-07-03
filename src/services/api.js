import axios from 'axios';


const api = axios.create({ baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=102&camera=navcam&api_key=2lGgUousTP6yJNFPPU3ztJRAbgVrkA5v3jkPeA1I'})

export default api