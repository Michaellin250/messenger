import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared/shared-material.module';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [SharedMaterialModule, CommonModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css'
})
export class NewMessageComponent {
  recipient = '';
  messages: string[] = [];

  @Output() chatCreated = new EventEmitter<string>();
  @Output() minimize = new EventEmitter<void>();

  setRecipient(name: string) {
    const trimmed = name.trim();
    if (trimmed && !this.recipient) {
      this.recipient = trimmed;
      this.chatCreated.emit(trimmed);
    }
  }

  sendMessage(input: HTMLInputElement) {
    const text = input.value.trim();
    if (text) {
      this.messages.push(text);
      input.value = '';
    }
  }
}
