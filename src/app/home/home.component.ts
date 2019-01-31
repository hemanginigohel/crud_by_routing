import { Component, OnInit } from '@angular/core';
import { FetchlistService } from "../fetchlist.service";
import { Ifetch } from "../ifetch";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fetchdata:Ifetch;
  page_array:Array<Number>=[];
  pagination:boolean=false;
  constructor(private fetch_list_service:FetchlistService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
     this.recordlist();
  }
  recordlist(page=1){
    this.pagination=true;
    this.fetch_list_service.fetchlist(page).subscribe(response=>{
      this.fetchdata=response;
      this.pagination=false;
      for(let i=1;i<=this.fetchdata.total_pages;i++){
        this.page_array[i-1]=i;
      }
    });
  }
ondelete(record):void{
    this.fetch_list_service.deletedata(record).subscribe(()=>{
      let index=this.fetchdata.data.indexOf(record);
        if(confirm("Are you sure you want to delete this user ?"))
        this.fetchdata.data.splice(index, 1);
    });
  }

}