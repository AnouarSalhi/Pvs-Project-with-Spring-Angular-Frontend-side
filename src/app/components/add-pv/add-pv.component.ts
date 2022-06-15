import { Component, OnInit } from '@angular/core';
import { Pv } from 'src/app/models/pv';
import { SourcePvs } from 'src/app/models/source-pvs';
import { TypePoliceJudic } from 'src/app/models/type-police-judic';
import { PvService } from 'src/app/services/pv.service';

@Component({
  selector: 'app-add-pv',
  templateUrl: './add-pv.component.html',
  styleUrls: ['./add-pv.component.css']
})
export class AddPvComponent implements OnInit {
   newPv=new Pv();
   typePoliceJudics:any=[];
   //typeSourcePvs?:any[];

   sourcePvs:any=[];
   typeSourcePvs:any=[];
  constructor(private pvService:PvService) { }
  
  ngOnInit(): void {
    this.getSourcePvs();
    this.getTypePoliceJudic();
    this.getTypeSourcePvs();
  }

  addPv(){
   // this.newPv.heureRealisation="2022-06-08 17:28:37.000000";
    this.pvService.addPv(this.newPv).subscribe((r)=>{
     // this.newPv=new Pv();
     console.log(this.newPv);
      console.log(this.newPv.sourcePvs);
      console.log("dazt");
    });
  }
  
  getSourcePvs(){
    this.pvService.getSourcePvs().subscribe(data=>{
      
      this.sourcePvs=data;

    });
  }
  getTypePoliceJudic(){
    this.pvService.getTypePoliceJudic().subscribe(data=>{
      
      this.typePoliceJudics=data;

    });
  }

  getTypeSourcePvs(){
    this.pvService.getTypeSourcePvs().subscribe(data=>{
      
      this.typeSourcePvs=data;

    });
  }
}
