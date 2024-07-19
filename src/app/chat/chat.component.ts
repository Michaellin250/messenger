import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', "../../shared.css"]
})
export class ChatComponent {

}
