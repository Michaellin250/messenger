import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  events: string[] = [];
  opened: boolean;
  placeIconBottom:string = '';


  constructor(private observer: BreakpointObserver){
    this.opened = true;
    this.placeIconBottom = 'bottomStick';
    console.log("here");
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
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
