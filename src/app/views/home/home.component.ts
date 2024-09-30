import { Component } from '@angular/core'
import { MatGridListModule } from '@angular/material/grid-list'
import { DescriptionComponent } from '../../modules/cv/components/description/description.component'
import { Skills } from '../../modules/cv/components/skills/skills.component'
import { WorkExperience } from '../../modules/cv/components/work-experience/work.experience.component'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [DescriptionComponent, Skills, WorkExperience, MatGridListModule],
  standalone: true
})
export default class HomeComponent{}