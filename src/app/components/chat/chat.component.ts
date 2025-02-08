import { Component, EventEmitter, Output } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-material.module'; 
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SharedMaterialModule,SearchBarComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', "../../../shared.css"]
})

export class ChatComponent {

  @Output() openNewMessage = new EventEmitter<void>();

  isNewMessageOpened = false;

  open() {
    this.openNewMessage.emit();
  }

}
