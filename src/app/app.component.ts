import { Component, HostListener, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, MatSidenav, MatNavList, MatIcon, MatSidenavContainer, MatSidenavContent, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  events: string[] = [];
  opened: boolean;
  placeIconBottom:string = '';


  constructor(private observer: BreakpointObserver){
    this.opened = false;
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
