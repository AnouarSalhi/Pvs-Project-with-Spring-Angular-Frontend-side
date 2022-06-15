import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pv } from '../models/pv';
import { SourcePvs } from '../models/source-pvs';
import { TypePoliceJudic } from '../models/type-police-judic';
import { TypeSourcePv } from '../models/type-source-pv';

@Injectable({
  providedIn: 'root'
})
export class PvService {
  urlApi="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  addPv(pv:Pv){
    return this.http.post<Pv>(this.urlApi+"pv/add",pv);
  }

  getAllPvs(){
    return  this.http.get<Pv>(this.urlApi+"pv/all");
  }

  getSourcePvs(){
    return  this.http.get<SourcePvs>(this.urlApi+"sourcepvs/all");
  }
  getTypePoliceJudic(){
    return  this.http.get<TypePoliceJudic>(this.urlApi+"typepolicejudic/all");
  }

  getTypeSourcePvs(){
    return  this.http.get<TypeSourcePv>(this.urlApi+"typesourcepvs/all");
  }
}
