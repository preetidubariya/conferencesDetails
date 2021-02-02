import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-conf-details',
  templateUrl: './conf-details.component.html',
  styleUrls: ['./conf-details.component.css']
})
export class ConfDetailsComponent implements OnInit {
  term: any;
  products:any=[];
  private api="https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";

  constructor(private httpClient: HttpClient){}
  ngOnInit(){

    this.httpClient.get(this.api).subscribe(data =>{
      console.log(data);
      this.products=data;
    })
  }


}
