import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrl:'./skills.component.scss',
  standalone: true,
  imports: [MatCardModule]
})
export class Skills {}