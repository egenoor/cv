import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { DescriptionComponent } from '../../modules/cv/components/description/description.component'
import Education from '../../modules/cv/components/education/education.component'
import Hobbies from '../../modules/cv/components/hobbies/hobbies.component'
import Languages from '../../modules/cv/components/languages/languages.component'
import { Skills } from '../../modules/cv/components/skills/skills.component'
import { WorkExperience } from '../../modules/cv/components/work-experience/work.experience.component'

@Component({
  selector: 'home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  imports: [
    DescriptionComponent,
    Skills, WorkExperience,
    Education,
    Hobbies,
    Languages,
    MatCardModule
  ],
  standalone: true
})
export default class HomeComponent{}