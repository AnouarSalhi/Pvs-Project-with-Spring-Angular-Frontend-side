import { Component, OnInit } from '@angular/core';
import { DataParties } from 'src/app/models/data-parties';
import { DataPartiesService } from 'src/app/services/data-parties.service';

@Component({
  selector: 'app-add-data-partie',
  templateUrl: './add-data-partie.component.html',
  styleUrls: ['./add-data-partie.component.css']
})
export class AddDataPartieComponent implements OnInit {
  dataParties=new DataParties;
  constructor(private dataPartiesService :DataPartiesService) { }

  ngOnInit(): void {
  }

  addDataParties(){
    // this.newPv.heureRealisation="2022-06-08 17:28:37.000000";
     this.dataPartiesService.addDataParties(this.dataParties).subscribe((r)=>{
      // this.newPv=new Pv();
      console.log(this.dataParties);
      // console.log(this.dataParties.sourcePvs);
       console.log("dazt");
     });
   }

}
