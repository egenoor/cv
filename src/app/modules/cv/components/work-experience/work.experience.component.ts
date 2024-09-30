import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  standalone: true,
  imports: [MatCardModule]
})
export class WorkExperience {}