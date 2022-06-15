import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataParties } from '../models/data-parties';

@Injectable({
  providedIn: 'root'
})
export class DataPartiesService {
  urlApi="http://localhost:8080/";
  constructor(private http :HttpClient) { }
  addDataParties(dataParties:DataParties){
    return this.http.post<DataParties>(this.urlApi+"dataparties/add",dataParties);
  }

  getAllDataParties(){
    return  this.http.get<DataParties>(this.urlApi+"dataparties/all");
  }


  
}
