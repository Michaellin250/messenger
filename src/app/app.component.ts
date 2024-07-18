import { Component, HostListener, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, MatSidenav, MatNavList, MatIcon, 
    MatSidenavContainer, MatSidenavContent, MatListModule, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
