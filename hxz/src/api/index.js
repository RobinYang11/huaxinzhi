import axios from 'axios';


let host = 'http://shop.projectsedu.com';

//获取项目列表

export const queryItems = params => { return axios.get(`${host}/items/`,params) }

