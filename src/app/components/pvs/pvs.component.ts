import { Component, OnInit } from '@angular/core';
import { Pv } from 'src/app/models/pv';
import { PvService } from 'src/app/services/pv.service';

@Component({
  selector: 'app-pvs',
  templateUrl: './pvs.component.html',
  styleUrls: ['./pvs.component.css']
})
export class PvsComponent implements OnInit {

 pvs:any=[];
  constructor(private pvService:PvService) { }

  ngOnInit(): void {
    this.getPvs();
  }
   getPvs(){
    this.pvService.getAllPvs().subscribe(data=>{
      this.pvs=data;
      console.table((this.pvs));
      
    });
   }
}
