import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  request(data:any,method:any,url:string):Promise<any>{
    return axios({
      method:method,
      data:data,
      url:url
    })
  }
}
