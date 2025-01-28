import { Component } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-material.module';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [SharedMaterialModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css'
})
export class NewMessageComponent {

}
