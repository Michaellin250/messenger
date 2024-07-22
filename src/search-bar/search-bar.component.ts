import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatIcon, MatSelectModule, MatCardModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}
