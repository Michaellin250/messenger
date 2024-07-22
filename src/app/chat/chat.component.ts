import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatIconModule, SearchBarComponent, MatListItem, MatList],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css', "../../shared.css"]
})
export class ChatComponent {

  isChatOpened = false;

  openNewChat(){

    console.log("OPENED");
    this.isChatOpened = !this.isChatOpened;
  }

}
