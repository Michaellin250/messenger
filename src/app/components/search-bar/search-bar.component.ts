import { Component } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-material.module';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SharedMaterialModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}
