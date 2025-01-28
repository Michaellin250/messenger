import { Component } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-material.module'; 
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { NewMessageComponent } from "../new-message/new-message.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SharedMaterialModule,SearchBarComponent, NewMessageComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', "../../../shared.css"]
})

export class ChatComponent {

  isNewMessageOpened = false;

  openNewMessage() {
    this.isNewMessageOpened = !this.isNewMessageOpened;
  }

}
