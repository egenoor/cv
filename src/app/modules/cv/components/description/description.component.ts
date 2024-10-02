import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
  standalone: true,
  imports: [MatIconModule]
})
export class DescriptionComponent {}