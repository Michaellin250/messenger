import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatComponent } from "../app/chat/chat.component";
import { NewMessageComponent } from "../new-message/new-message.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule, ChatComponent, NewMessageComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ["./side-bar.component.css", "../shared.css"]
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
