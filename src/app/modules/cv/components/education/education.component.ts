import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  standalone: true,
  imports: [MatCardModule]
})

export default class Education{}