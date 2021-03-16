 
import { HttpClient, } from '@angular/common/http';
import { Component,   OnInit } from '@angular/core';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  constructor(){}

  log(x){
    console.log(x);
  }
  submit(x){
    console.log(x);
    console.log("values"+x.value)
  }
  }
   
  
   
  
  