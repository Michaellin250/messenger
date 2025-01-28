import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, ViewChild } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-material.module'; 
import { ChatComponent } from "../chat/chat.component";
import { NewMessageComponent } from "../new-message/new-message.component";
import { CommonModule } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SharedMaterialModule,
    ChatComponent, NewMessageComponent, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ["./side-bar.component.css", "../../../shared.css"]
})
export class SideBarComponent {

  title = 'material-responsive-sidenav';
  width?:string;
  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;
  isOpened = false;
  

  placeIconBottom:string = '';

  constructor(private observer: BreakpointObserver){
    this.placeIconBottom = 'bottomStick';
  }

  @HostListener('window:resize', ['$event'])
  getScreenHeight(event?:EventListener){

    if(window.innerHeight<=412){
      this.placeIconBottom = 'bottomRelative';
    }else{
      this.placeIconBottom = 'bottomStick';
    }
  }

  ngOnInit(){

  }

  toggleMenu() {

    if(this.isOpened){
      this.width = "fit-content";
    } else{
      this.width = "150px";
    }
      this.isOpened = !this.isOpened;
    }

}
