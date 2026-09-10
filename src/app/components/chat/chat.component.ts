import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() chats: string[] = [];

  @Output() openNewMessage = new EventEmitter<void>();

  open() {
    this.openNewMessage.emit();
  }

}
