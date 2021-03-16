import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 
 
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
   photos:any;
   
  constructor(private http:HttpClient ) { }
  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/photos") .subscribe(response =>{
      this.photos = response;
    })
  }
}