import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
  standalone: true,
  imports: [MatCardModule]
})

export default class Hobbies{}