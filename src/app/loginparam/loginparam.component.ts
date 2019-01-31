import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from "@angular/router";
import { FetchlistService } from '../fetchlist.service';
import { Userdata } from "../userdata";
import { Router } from "@angular/router";
@Component({
  selector: 'app-loginparam',
  templateUrl: './loginparam.component.html',
  styleUrls: ['./loginparam.component.css']
})
export class LoginparamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fetchlistservice: FetchlistService, private router: Router) { }
  idval: boolean = false;
  id: string;
  waitmessage: string = "submit";
  newdata: Userdata = new Userdata(); 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fetchmethod(this.id);
    })
  }
  fetchmethod(id) {
    if (id === 'new') {
      this.idval = true;
      this.newdata = new Userdata();
    }
    else {
      this.idval = false;
      this.fetchlistservice.fetchuser(id).subscribe(response => {
      this.newdata = response.data;
      });
    }
  }
  onsubmit(newdata) {
    this.waitmessage = "please wait..";
    if (!this.idval && this.id != "new") {
      this.fetchlistservice.putdata(this.id, this.newdata)
        .subscribe(response => {
          this.waitmessage = "submit";
          this.router.navigateByUrl('/record-list');
        })
    }
    else {
      this.fetchlistservice.postdata(this.newdata)
        .subscribe(response => {
          this.waitmessage = "submit";
          this.router.navigateByUrl('/record-list');
        })
    }
  }
}