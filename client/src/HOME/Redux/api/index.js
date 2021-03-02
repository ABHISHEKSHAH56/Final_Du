import axios from 'axios';
const url ='http://localhost:50000/';
export const fetchcollege =()=>axios.get(`${url}/sec`);
export const fetchone=(id)=>axios.get(`${url}/overview/${id}`)
export const fetchfees=(id)=>axios.get(`${url}/fees/${id}`)
export const fetchcourse=(id)=>axios.get(`${url}/course/${id}`)
export const fetchcutoff=(raw)=>axios.get(`${url}/cutoff/${raw.id}/${raw.year}/${raw.cate}`)
