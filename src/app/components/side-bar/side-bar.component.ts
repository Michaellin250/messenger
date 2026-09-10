import { Component, HostListener, ViewChild } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { ChatComponent } from '../chat/chat.component';
import { NewMessageComponent } from '../new-message/new-message.component';
import { CommonModule } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SharedMaterialModule, ChatComponent, NewMessageComponent, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css', '../../../shared.css']
})
export class SideBarComponent {
  width?: string;

  @ViewChild(MatSidenav)
  public sidenav!: MatSidenav;

  isExpanded = false;
  isNewMessageVisible = false;
  placeIconBottom = 'bottomStick';
  chats: string[] = [];

  @HostListener('window:resize')
  getScreenHeight() {
    this.placeIconBottom = window.innerHeight <= 412 ? 'bottomRelative' : 'bottomStick';
  }

  toggleMenu() {
    this.width = this.isExpanded ? 'fit-content' : '150px';
    this.isExpanded = !this.isExpanded;
  }

  openNewMessage() {
    this.isNewMessageVisible = !this.isNewMessageVisible;
  }

  minimizeNewMessage() {
    this.isNewMessageVisible = false;
  }

  addChat(name: string) {
    this.chats.push(name);
  }
}
