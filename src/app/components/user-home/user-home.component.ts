import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  public toggled:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggle():void{
    this.toggled=!this.toggled;
  }

}
